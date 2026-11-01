---
name: chinese-coder
description: >-
  Delegates code writing, refactoring, UI generation, and complex algorithm implementation
  to top Chinese coding models (DeepSeek V4/R1, Kimi K3/K2.5, Qwen3-Coder, GLM-5) via OpenRouter or DeepSeek API.
  Activate this skill whenever any code needs to be written or modified in this workspace.
---

# Chinese Coder Delegation Skill

This skill allows the primary agent (acting as Architect, Planner, and Reviewer) to delegate actual code authoring to specialized flagship Chinese LLMs.

## Model Roles (`--role`)

- `logic` (default): **DeepSeek Flagship (`deepseek-v4` / `deepseek-chat`)** — Best for backend, data processing, state management, and general coding.
- `reasoner`: **DeepSeek Reasoner (`deepseek-r1`)** — Best for complex algorithms, tricky bugs, and multi-step logic.
- `frontend`: **Moonshot Kimi (`kimi-k3` / `kimi-k2.5`)** — Best for UI components, CSS/Tailwind styling, animations, and large context frontend views.
- `qwen`: **Alibaba Qwen (`qwen3-coder`)** — Best for strict TypeScript typing and framework boilerplate.
- `glm`: **Z.ai GLM (`glm-5.3` / `glm-5`)** — Best for structured multi-file edits.

## How to Execute Delegation

1. **Explore & Architect**: Read the relevant project files and design the exact technical specification.
2. **Delegate**: Run the dispatcher script from the workspace root (`c:\Users\alexk\Documents\Greek Exam B1`):

```powershell
node .agents/skills/chinese-coder/scripts/delegate.mjs `
  --role <logic|reasoner|frontend|qwen|glm> `
  --prompt "Detailed technical specification of what to write/modify..." `
  --files greek-b1-app/src/App.tsx `
  --apply
```

For multi-line specifications, write the spec to `.agents/scratch/spec.md` first and pass `--prompt-file .agents/scratch/spec.md`.

3. **Review & Verify**:
   - Inspect `git diff` or the generated files.
   - Run the project build/linter (`npm run build` or `npx tsc --noEmit`) to verify the delegated code compiles cleanly.
   - If there are type or lint errors, either re-delegate the fix or patch minor issues.
