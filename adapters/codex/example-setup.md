---
name: codex-example-setup
description: Example installation and bootstrap steps for codex.
trigger: Use this when you need a concrete install and bootstrap example for codex.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for codex, but does not replace the adapter contract or canonical repository structure.
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
# Codex Example Setup

1. Clone the repository locally.
2. Add the local plugin from `plugins/ai-starter-kit`.
3. Open the repository and route work through `AGENTS.md`.
4. Use the universal fallback `npx skills add JYBLOCKS/agents-skills-starter-kit -a codex` when you only need the skill payloads.
