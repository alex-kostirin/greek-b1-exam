#!/usr/bin/env node
/**
 * Chinese Coding Models Delegation Dispatcher
 * Supports OpenRouter (DeepSeek, Kimi, Qwen, GLM) and Direct DeepSeek API.
 *
 * Usage:
 *   node .agents/skills/chinese-coder/scripts/delegate.mjs \
 *     --role <logic|reasoner|frontend|agent|coder> \
 *     --prompt "Detailed specification..." \
 *     --files file1.ts file2.tsx \
 *     [--output-json .agents/scratch/response.json] \
 *     [--apply]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../../..');

// Load .env manually so zero external npm packages are required
function loadEnv() {
  const envPath = path.join(ROOT_DIR, '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
    if (val && !process.env[key]) {
      process.env[key] = val;
    }
  }
}

loadEnv();

// Model routing presets for OpenRouter and Direct DeepSeek
const OPENROUTER_MODELS = {
  logic: 'deepseek/deepseek-chat',          // DeepSeek flagship (V3/V4) - fast & top coding logic
  reasoner: 'deepseek/deepseek-r1',         // DeepSeek Reasoner - complex architecture & algorithms
  frontend: 'moonshotai/kimi-k2',           // Kimi flagship on OpenRouter (fallback to deepseek if overridden)
  qwen: 'qwen/qwen3-coder',                 // Alibaba Qwen3 Coder - TypeScript/React specialist
  glm: 'z-ai/glm-5',                        // Z.ai GLM flagship - agentic multi-file edits
};

const DIRECT_DEEPSEEK_MODELS = {
  logic: 'deepseek-chat',
  reasoner: 'deepseek-reasoner',
  frontend: 'deepseek-chat',
  qwen: 'deepseek-chat',
  glm: 'deepseek-chat',
};

function parseArgs(argv) {
  const args = {
    role: 'logic',
    model: null,
    prompt: '',
    promptFile: null,
    files: [],
    apply: false,
    listModels: false,
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--role' && argv[i + 1]) {
      args.role = argv[++i];
    } else if (arg === '--model' && argv[i + 1]) {
      args.model = argv[++i];
    } else if (arg === '--prompt' && argv[i + 1]) {
      args.prompt = argv[++i];
    } else if (arg === '--prompt-file' && argv[i + 1]) {
      args.promptFile = argv[++i];
    } else if (arg === '--files') {
      while (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
        args.files.push(argv[++i]);
      }
    } else if (arg === '--apply') {
      args.apply = true;
    } else if (arg === '--list-models') {
      args.listModels = true;
    }
  }
  return args;
}

async function resolveOpenRouterBestModel(role, apiKey) {
  // Queries OpenRouter model catalog to automatically pick the latest available flagship for the chosen Chinese lab
  try {
    const res = await fetch('https://openrouter.ai/api/v1/models', {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!res.ok) return OPENROUTER_MODELS[role] || OPENROUTER_MODELS.logic;
    const { data } = await res.json();
    const ids = new Set(data.map((m) => m.id));

    const candidatesByRole = {
      logic: [
        'deepseek/deepseek-v4-pro',
        'deepseek/deepseek-v4.1-flash',
        'deepseek/deepseek-v4-flash',
        'deepseek/deepseek-chat',
      ],
      reasoner: [
        'deepseek/deepseek-v4-pro',
        'deepseek/deepseek-r1-0528',
        'deepseek/deepseek-r1',
      ],
      frontend: [
        'moonshotai/kimi-k3.1-pro',
        'moonshotai/kimi-k3',
        'moonshotai/kimi-k2.7-code',
      ],
      qwen: [
        'qwen/qwen3.8-max-prime',
        'qwen/qwen3.8-2.4t-a95b',
        'qwen/qwen3-coder-next',
        'qwen/qwen3-coder',
      ],
      glm: [
        'z-ai/glm-5.3-prime',
        'z-ai/glm-5.3',
        'z-ai/glm-5.2',
      ],
    };

    const candidates = candidatesByRole[role] || candidatesByRole.logic;
    for (const candidate of candidates) {
      if (ids.has(candidate)) return candidate;
    }
  } catch {
    // Fallback if offline or error
  }
  return OPENROUTER_MODELS[role] || OPENROUTER_MODELS.logic;
}

function buildContextPayload(files) {
  if (!files.length) return 'No existing files provided.';
  const blocks = [];
  for (const relPath of files) {
    const absPath = path.resolve(ROOT_DIR, relPath);
    if (fs.existsSync(absPath) && fs.statSync(absPath).isFile()) {
      const content = fs.readFileSync(absPath, 'utf8');
      blocks.push(`=== FILE: ${relPath} ===\n${content}\n=== END FILE: ${relPath} ===`);
    } else {
      blocks.push(`=== FILE: ${relPath} (NEW FILE - DOES NOT EXIST YET) ===`);
    }
  }
  return blocks.join('\n\n');
}

function extractFilesFromResponse(markdown) {
  // Matches blocks like:
  // ```filepath:path/to/file.tsx
  // ...content...
  // ```
  const regex = /```(?:filepath:|file:)([^\r\n`]+)\r?\n([\s\S]*?)```/g;
  const extracted = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    extracted.push({
      filePath: match[1].trim(),
      content: match[2],
    });
  }
  return extracted;
}

async function main() {
  const args = parseArgs(process.argv);

  const openRouterKey = process.env.OPENROUTER_API_KEY;
  const deepSeekKey = process.env.DEEPSEEK_API_KEY;

  if (!openRouterKey && !deepSeekKey) {
    console.error(
      'ERROR: Не найден API-ключ! Добавь OPENROUTER_API_KEY или DEEPSEEK_API_KEY в файл .env в корне проекта.'
    );
    process.exit(1);
  }

  const useOpenRouter = Boolean(openRouterKey);
  const apiKey = useOpenRouter ? openRouterKey : deepSeekKey;
  const endpoint = useOpenRouter
    ? 'https://openrouter.ai/api/v1/chat/completions'
    : 'https://api.deepseek.com/chat/completions';

  let model = args.model;
  if (!model) {
    model = useOpenRouter
      ? await resolveOpenRouterBestModel(args.role, apiKey)
      : DIRECT_DEEPSEEK_MODELS[args.role] || 'deepseek-chat';
  }

  if (args.listModels) {
    console.log(`Provider: ${useOpenRouter ? 'OpenRouter' : 'Direct DeepSeek'}`);
    console.log(`Resolved model for role "${args.role}": ${model}`);
    process.exit(0);
  }

  const taskPrompt = args.promptFile
    ? fs.readFileSync(path.resolve(ROOT_DIR, args.promptFile), 'utf8')
    : args.prompt;

  if (!taskPrompt) {
    console.error('ERROR: Укажи --prompt или --prompt-file');
    process.exit(1);
  }

  const filesContext = buildContextPayload(args.files);

  const systemPrompt = `You are an elite Principal Software Engineer delegated to write production-grade code.
Follow the technical specification strictly. Do NOT omit any code with placeholders like "// ... rest of code".
When returning full or updated files, ALWAYS wrap each file in a fenced code block with the exact header \`\`\`filepath:relative/path/to/file.ext
Example:
\`\`\`filepath:greek-b1-app/src/components/Example.tsx
// full file content here
\`\`\`
After the file blocks, briefly summarize the changes made.`;

  const userMessage = `### TECHNICAL SPECIFICATION
${taskPrompt}

### PROJECT FILES CONTEXT
${filesContext}`;

  console.log(`[Delegation] Provider: ${useOpenRouter ? 'OpenRouter' : 'DeepSeek Direct'}`);
  console.log(`[Delegation] Model: ${model} (role: ${args.role})`);
  console.log(`[Delegation] Sending ${args.files.length} context file(s)...`);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      ...(useOpenRouter
        ? {
            'HTTP-Referer': 'https://github.com/greek-exam-b1',
            'X-Title': 'Greek Exam B1 Agent Orchestrator',
          }
        : {}),
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.1,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error(`API Error (${response.status}): ${errText}`);
    process.exit(1);
  }

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || '';
  const usage = data.usage || {};

  console.log(
    `[Delegation] Completed! Tokens — prompt: ${usage.prompt_tokens || '?'}, completion: ${usage.completion_tokens || '?'}`
  );

  // Save full markdown output for inspection
  const scratchDir = path.join(ROOT_DIR, '.agents', 'scratch');
  fs.mkdirSync(scratchDir, { recursive: true });
  const lastOutputPath = path.join(scratchDir, 'last_delegation_output.md');
  fs.writeFileSync(lastOutputPath, reply, 'utf8');

  if (args.apply) {
    const extracted = extractFilesFromResponse(reply);
    if (extracted.length === 0) {
      console.warn('[Delegation] Warning: No ```filepath:...``` blocks found to auto-apply.');
    } else {
      for (const item of extracted) {
        const targetPath = path.resolve(ROOT_DIR, item.filePath);
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        fs.writeFileSync(targetPath, item.content, 'utf8');
        console.log(`[Delegation] Applied file: ${item.filePath}`);
      }
    }
  }

  console.log('\n--- MODEL RESPONSE ---\n');
  console.log(reply);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
