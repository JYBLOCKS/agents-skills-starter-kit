---
name: cursor-example-setup
description: Example installation and bootstrap steps for cursor.
trigger: Use this when you need a concrete install and bootstrap example for cursor.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for cursor, but does not replace the adapter contract or canonical repository structure.
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
# Cursor Example Setup

1. Install with `npx skills add JYBLOCKS/agents-skills-starter-kit -a cursor`.
2. Open the repository root in Cursor.
3. Use `AGENTS.md` to choose the active agent.
4. Load the matching context, rules, and skills from the neutral core.
