#!/usr/bin/env node

import { chromium } from 'playwright';
import { promises as fs } from 'fs';
import path from 'path';
import readline from 'readline';
import process from 'process';

// ----------------------------------------------------------------------
// Configuration
// ----------------------------------------------------------------------
const ROOT_DIR = process.cwd();
const PROFILE_DIR = path.resolve(ROOT_DIR, '.preply-profile');
const MESSAGES_URL = 'https://preply.com/messages';
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const VIEWPORT = { width: 1280, height: 800 };

// Selectors that may indicate message bubbles or chat containers
const MESSAGE_SELECTORS = [
  '[data-qa*="message"]',
  '[class*="message"]',
  '[class*="chat"]',
  '[class*="bubble"]',
  '[class*="conversation"]',
  '[data-testid*="message"]',
  '[data-test*="message"]',
];

// Selectors that may contain timestamps
const TIMESTAMP_SELECTORS = [
  '[data-qa*="time"]',
  '[data-qa*="date"]',
  '[class*="time"]',
  '[class*="date"]',
  '[class*="timestamp"]',
  '[data-testid*="time"]',
  '[data-test*="time"]',
];

// Greek Unicode ranges (Greek and Coptic, Greek Extended)
const GREEK_REGEX = /[\u0370-\u03FF\u1F00-\u1FFF]/;
const GREEK_PHRASE_REGEX =
  /(?:[^\s]*[\u0370-\u03FF\u1F00-\u1FFF][^\s]*)(?:\s+[^\s]*[\u0370-\u03FF\u1F00-\u1FFF][^\s]*)*/g;

// ----------------------------------------------------------------------
// Logging helpers (Russian)
// ----------------------------------------------------------------------
function logInfo(msg) {
  console.log(`[INFO] ${msg}`);
}

function logWarn(msg) {
  console.warn(`[ВНИМАНИЕ] ${msg}`);
}

function logError(msg) {
  console.error(`[ОШИБКА] ${msg}`);
}

// ----------------------------------------------------------------------
// Browser launch
// ----------------------------------------------------------------------
async function launchBrowser(headless = false) {
  logInfo('Запуск браузера с постоянным профилем...');
  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
    ],
    viewport: VIEWPORT,
    locale: 'ru-RU',
  });
  return context;
}

// ----------------------------------------------------------------------
// Login mode
// ----------------------------------------------------------------------
async function loginMode() {
  logInfo('Режим входа в аккаунт Preply.');
  const context = await launchBrowser(false); // always visible
  const page = await context.newPage();

  try {
    await page.goto(MESSAGES_URL, { waitUntil: 'domcontentloaded' });
    console.log('Браузер запущен. Пожалуйста, выполните вход в свой аккаунт Preply в открывшемся окне.');
    console.log('После успешного входа нажмите [ENTER] в этой консоли, чтобы сохранить профиль и завершить.');

    // Wait for user to press Enter
    await waitForEnter();

    logInfo('Вход выполнен. Сохранение профиля...');
    await context.close();
    logInfo('Профиль сохранён. Готово.');
  } catch (error) {
    logError(`Ошибка в режиме входа: ${error.message}`);
    await context.close();
    process.exit(1);
  }
}

// ----------------------------------------------------------------------
// Extract mode
// ----------------------------------------------------------------------
async function extractMode(options = {}) {
  const { tutor, visible } = options;
  logInfo('Режим извлечения сообщений и греческих слов.');
  const headless = !visible; // headless by default unless --visible
  const context = await launchBrowser(headless);
  const page = await context.newPage();

  try {
    await page.goto(MESSAGES_URL, { waitUntil: 'domcontentloaded' });

    // Wait for conversation links to appear
    const links = await waitForConversationLinks(page);
    if (!links || links.length === 0) {
      // Check if login is required
      const loginDetected = await isLoginPage(page);
      if (loginDetected) {
        logWarn('Требуется авторизация. Запустите сначала: node scripts/preply_sync.mjs --login');
      } else {
        logWarn('Не удалось обнаружить беседы. Возможно, у вас нет сообщений или страница не загрузилась.');
      }
      await context.close();
      process.exit(1);
    }

    // Print found tutors/chats
    console.log('\nНайденные беседы:');
    links.forEach((link, idx) => {
      console.log(`${idx + 1}. ${link.text} (${link.href})`);
    });

    // Determine which conversation to open
    let targetLink;
    if (tutor) {
      // Try to match by index (1-based) or name substring
      const index = parseInt(tutor, 10);
      if (!isNaN(index) && index >= 1 && index <= links.length) {
        targetLink = links[index - 1];
      } else {
        // Search by name substring (case-insensitive)
        const found = links.find((l) => l.text.toLowerCase().includes(tutor.toLowerCase()));
        if (found) {
          targetLink = found;
        } else {
          logError(`Репетитор "${tutor}" не найден. Доступные: ${links.map(l => l.text).join(', ')}`);
          await context.close();
          process.exit(1);
        }
      }
    } else {
      // Default: first (most recent)
      targetLink = links[0];
    }

    logInfo(`Открытие беседы: ${targetLink.text}`);
    if (targetLink.href) {
      await page.goto(targetLink.href, { waitUntil: 'domcontentloaded' });
    } else if (targetLink.element) {
      await targetLink.element.click();
    }

    // Wait for chat to load
    await waitForChatToLoad(page);

    logInfo('Извлечение сообщений из чата...');
    const messages = await extractMessages(page);

    if (messages.length === 0) {
      logWarn('Не найдено ни одного сообщения в открытой беседе.');
      await context.close();
      process.exit(0);
    }

    logInfo(`Найдено сообщений: ${messages.length}`);
    const greekCount = messages.filter((m) => m.isGreek).length;
    logInfo(`Из них содержат греческий текст: ${greekCount}`);

    // Output to console
    printMessagesToConsole(messages);

    // Write files
    await writeJsonFile(messages);
    await writeMarkdownFile(messages);

    logInfo('Данные сохранены в extracted_preply_words.json и extracted_preply_words.md');
    await context.close();
  } catch (error) {
    logError(`Ошибка в режиме извлечения: ${error.message}`);
    await context.close();
    process.exit(1);
  }
}

// ----------------------------------------------------------------------
// Helper: wait for Enter key
// ----------------------------------------------------------------------
function waitForEnter() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('', () => {
      rl.close();
      resolve();
    });
  });
}

// ----------------------------------------------------------------------
// Helper: wait for conversation links to appear
// ----------------------------------------------------------------------
async function waitForConversationLinks(page, timeoutMs = 30000) {
  logInfo('Ожидание загрузки списка бесед...');
  try {
    await page.waitForSelector('a[href*="/messages/"]', { timeout: timeoutMs });
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a[href*="/messages/"]'));
      return anchors
        .map((a, index) => ({
          index,
          text: a.textContent.trim().replace(/\s+/g, ' '),
          href: a.href,
        }))
        .filter((item) => item.text.length > 2 && !/^\d+$/.test(item.text));
    });
    return links;
  } catch (error) {
    logWarn('Таймаут ожидания бесед: ' + error.message);
    return [];
  }
}

// ----------------------------------------------------------------------
// Helper: wait for chat to load after clicking a conversation
// ----------------------------------------------------------------------
async function waitForChatToLoad(page, timeoutMs = 30000) {
  logInfo('Ожидание загрузки чата...');
  await page.waitForTimeout(3000);
  try {
    await page.waitForSelector(
      [
        '[data-qa="message-input"]',
        '[class*="chat"] [class*="message"]',
        'textarea',
        '[contenteditable="true"]',
      ].join(', '),
      { timeout: 5000 }
    );
  } catch {
    logWarn('Не удалось дождаться элементов ввода чата, продолжаем парсинг...');
  }
}

// ----------------------------------------------------------------------
// Helper: get a CSS selector for the sidebar container
// ----------------------------------------------------------------------
async function getSidebarSelector(page) {
  return await page.evaluate(() => {
    const firstLink = document.querySelector('a[href*="/messages/"]');
    if (!firstLink) return null;
    let parent = firstLink.parentElement;
    for (let i = 0; i < 6 && parent; i++) {
      const cls = parent.className;
      if (typeof cls === 'string' && /sidebar|conversation|thread|chat-list|left/i.test(cls)) {
        return '.' + cls.split(/\s+/).filter(Boolean).join('.');
      }
      parent = parent.parentElement;
    }
    return null;
  });
}

// ----------------------------------------------------------------------
// Helper: detect login page
// ----------------------------------------------------------------------
async function isLoginPage(page) {
  const url = page.url();
  if (/login|auth|signin/i.test(url)) {
    return true;
  }
  // Check for password input
  const passwordInputCount = await page.locator('input[type="password"]').count();
  if (passwordInputCount > 0) {
    return true;
  }
  // Check for common login text
  const bodyText = await page.evaluate(() => document.body.innerText);
  if (/войти|вход|log in|sign in/i.test(bodyText)) {
    return true;
  }
  return false;
}

// ----------------------------------------------------------------------
// Helper: extract messages from the page, excluding sidebar
// ----------------------------------------------------------------------
async function extractMessages(page) {
  return await page.evaluate(
    ({ greekRegex, greekPhraseRegex }) => {
      const results = [];
      const seen = new Set();

      // Find all message containers in the chat area
      const textContainers = Array.from(document.querySelectorAll('.ReactMarkdown, [class*="TextMessageWrap"]'));

      for (const el of textContainers) {
        const text = el.textContent?.trim() || '';
        if (!text || seen.has(text)) continue;

        // Skip system banners / UI buttons
        if (text.includes('Ответить на вопросы') || text.includes('Выберите репетитора') || text.includes('оценки прогресса')) continue;

        seen.add(text);

        const isIncoming = Boolean(el.closest('[class*="MessageMainIncoming"], [class*="incoming"]'));
        const isGreek = greekRegex.test(text);

        const greekPhrases = [];
        if (isGreek) {
          const matches = text.match(greekPhraseRegex) || [];
          for (const match of matches) {
            const cleaned = match.replace(/^[^\w\s\u0370-\u03FF\u1F00-\u1FFF]+|[^\w\s\u0370-\u03FF\u1F00-\u1FFF]+$/g, '').trim();
            if (cleaned) greekPhrases.push(cleaned);
          }
        }

        // Try to find timestamp in parent container
        const parent = el.closest('[class*="Message"], [class*="bubble"]') || el.parentElement;
        const timestamp = parent
          ? Array.from(parent.querySelectorAll('*'))
              .map((e) => e.textContent.trim())
              .find((t) => /^\d{1,2}:\d{2}$/.test(t)) || null
          : null;

        results.push({
          text,
          isIncoming,
          sender: isIncoming ? 'Преподаватель' : 'Студент',
          isGreek,
          greekPhrases,
          timestamp,
        });
      }

      return results;
    },
    {
      greekRegex: GREEK_REGEX,
      greekPhraseRegex: GREEK_PHRASE_REGEX,
    }
  );
}

// ----------------------------------------------------------------------
// Helper: print messages to console
// ----------------------------------------------------------------------
function printMessagesToConsole(messages) {
  const tutorWords = messages.filter((m) => m.isIncoming && m.isGreek);
  const tutorNotes = messages.filter((m) => m.isIncoming && !m.isGreek);

  console.log('\n======================================================');
  console.log('       СЛОВА И ФРАЗЫ ПРЕПОДАВАТЕЛЯ С ЗАНЯТИЯ');
  console.log('======================================================\n');

  if (tutorWords.length > 0) {
    tutorWords.forEach((msg, idx) => {
      const time = msg.timestamp ? ` [${msg.timestamp}]` : '';
      console.log(`  ${idx + 1}. ${msg.text}${time}`);
    });
  } else {
    console.log('  (Греческих фраз преподавателя не обнаружено)');
  }

  if (tutorNotes.length > 0) {
    console.log('\n--- Заметки и пояснения преподавателя (на русском/других языках): ---');
    tutorNotes.forEach((msg, idx) => {
      console.log(`  - ${msg.text}`);
    });
  }

  console.log('\n======================================================\n');
}

// ----------------------------------------------------------------------
// Helper: write JSON file
// ----------------------------------------------------------------------
async function writeJsonFile(messages) {
  const filePath = path.resolve(ROOT_DIR, 'extracted_preply_words.json');
  const tutorWords = messages.filter((m) => m.isIncoming && m.isGreek);
  const data = {
    extractedAt: new Date().toISOString(),
    totalMessages: messages.length,
    tutorGreekMessagesCount: tutorWords.length,
    tutorWords: tutorWords.map((m) => ({
      text: m.text,
      phrases: m.greekPhrases,
      timestamp: m.timestamp,
    })),
    allMessages: messages,
  };
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  logInfo(`JSON файл записан: ${filePath}`);
}

// ----------------------------------------------------------------------
// Helper: write Markdown file
// ----------------------------------------------------------------------
async function writeMarkdownFile(messages) {
  const filePath = path.resolve(ROOT_DIR, 'extracted_preply_words.md');
  const tutorWords = messages.filter((m) => m.isIncoming && m.isGreek);
  const tutorNotes = messages.filter((m) => m.isIncoming && !m.isGreek);
  const studentMessages = messages.filter((m) => !m.isIncoming);

  let md = '# 🇬🇷 Извлечённые слова и фразы с урока Preply\n\n';
  md += `> **Дата извлечения:** ${new Date().toLocaleString('ru-RU')}\n`;
  md += `> **Всего слов/фраз преподавателя:** ${tutorWords.length}\n\n`;

  md += '## 📝 Греческие слова от преподавателя\n\n';
  if (tutorWords.length > 0) {
    md += '| № | Греческое слово / фраза | Время |\n';
    md += '|---|-------------------------|-------|\n';
    tutorWords.forEach((msg, idx) => {
      const textEscaped = msg.text.replace(/\|/g, '\\|').replace(/\n/g, ' ');
      const time = msg.timestamp || '—';
      md += `| ${idx + 1} | **${textEscaped}** | ${time} |\n`;
    });
  } else {
    md += '_Греческих слов не обнаружено_\n';
  }

  if (tutorNotes.length > 0) {
    md += '\n## 💬 Заметки преподавателя\n\n';
    tutorNotes.forEach((msg) => {
      md += `- ${msg.text}\n`;
    });
  }

  if (studentMessages.length > 0) {
    md += '\n<details><summary><b>Показать реплики студента</b></summary>\n\n';
    studentMessages.forEach((msg) => {
      md += `- ${msg.text}\n`;
    });
    md += '\n</details>\n';
  }

  await fs.writeFile(filePath, md, 'utf8');
  logInfo(`Markdown файл записан: ${filePath}`);
}

// ----------------------------------------------------------------------
// Main entry point
// ----------------------------------------------------------------------
async function main() {
  const args = process.argv.slice(2);
  let mode = 'extract';
  let tutor = null;
  let visible = false;

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--login') {
      mode = 'login';
    } else if (arg === '--extract') {
      mode = 'extract';
    } else if (arg === '--tutor' && i + 1 < args.length) {
      tutor = args[++i];
    } else if (arg === '--visible') {
      visible = true;
    } else if (arg === '--help' || arg === '-h') {
      console.log(`
Использование: node scripts/preply_sync.mjs [опции]

Опции:
  --login               Запустить режим входа (браузер всегда видимый)
  --extract             Запустить режим извлечения (по умолчанию)
  --tutor <имя/номер>   Выбрать конкретного репетитора (по имени или номеру из списка)
  --visible             Показать браузер в режиме извлечения (по умолчанию headless)
  --help, -h            Показать эту справку
`);
      process.exit(0);
    }
  }

  // Handle SIGINT for clean shutdown
  let context = null;
  process.on('SIGINT', async () => {
    logWarn('Получен сигнал прерывания. Закрытие браузера...');
    if (context) {
      await context.close();
    }
    process.exit(0);
  });

  try {
    if (mode === 'login') {
      await loginMode();
    } else {
      await extractMode({ tutor, visible });
    }
  } catch (error) {
    logError(`Необработанная ошибка: ${error.message}`);
    process.exit(1);
  }
}

// Run
main().catch((error) => {
  logError(`Критическая ошибка: ${error.message}`);
  process.exit(1);
});
