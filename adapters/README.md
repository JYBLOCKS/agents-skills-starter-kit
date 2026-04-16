---
name: adapters
description: Catalog and structure overview for tool adapters.
trigger: Use this when browsing the available Adapters resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Adapters, but does not replace the canonical documents it references.
  auto-invoke: false
allowed-tools:
  - generic
  - openai
  - claude-code
  - opencode
  - cursor
  - windsurf
  - github-copilot
  - cline
  - gemini-cli
  - codex
---
# Adapters

Adapters map the neutral core into tool-specific conventions.

## Included Adapters

- `generic/`: fallback contract for unsupported tools
- `openai/`: OpenAI-oriented mapping
- `claude-code/`: Claude Code-oriented mapping
- `opencode/`: OpenCode-oriented mapping
- `cursor/`: Cursor-specific install and repository mapping
- `windsurf/`: Windsurf-specific install and repository mapping
- `github-copilot/`: GitHub Copilot install and repository mapping
- `cline/`: Cline install and repository mapping
- `gemini-cli/`: Gemini CLI native extension and universal fallback mapping
- `codex/`: Codex local plugin and universal fallback mapping

Use the generic adapter first when onboarding a new tool.
