# Agents

Tool-agnostic custom agent definitions for this repository. Each file is a markdown prompt with minimal YAML frontmatter (`name`, `description`) so the same source works in GitHub Copilot, Claude Code, and opencode.

## Source of truth

Edit files in this folder only. Never edit the symlinked copies.

| Agent | Purpose |
|---|---|
| `build-validator.md` | Diagnose and fix `tsc` / Vite build failures |
| `component-developer.md` | React + TypeScript components using the site's design tokens |
| `content-editor.md` | Projects, timeline entries, and `en.json` / `it.json` sync |
| `page-creator.md` | New routed pages and `App.tsx` route wiring |

## Wiring

Each tool's directory contains symlinks back into `agents/`:

```
.github/agents/<name>.md   -> ../../agents/<name>.md   # GitHub Copilot
.claude/agents/<name>.md   -> ../../agents/<name>.md   # Claude Code
.opencode/agents/<name>.md -> ../../agents/<name>.md   # opencode
```

## Adding an agent

1. Create `agents/<name>.md` with `name` and `description` frontmatter and the prompt body.
2. Symlink it into each tool directory:

```bash
for d in .github/agents .claude/agents .opencode/agents; do
    ln -sf "../../agents/<name>.md" "$d/<name>.md"
done
```

Omitting tool-specific frontmatter (`tools`, `model`, `mode`) is intentional: it keeps one file valid everywhere and lets each tool apply its own defaults. If an agent truly needs a tool restriction, add it per tool and stop sharing that file.
