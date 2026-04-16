---
name: openai-example-setup
description: Example installation and bootstrap steps for openai.
trigger: Use this when you need a concrete install and bootstrap example for openai.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for openai, but does not replace the adapter contract or canonical repository structure.
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
# OpenAI Example Setup

Use `agents/orchestrator-agent/prompt.md` as the base prompt, then include:

- `rules/global-rules.md`
- `rules/agent-rules.md`
- `agents/orchestrator-agent/rules.md`
- relevant files from `context/`

Reference skills like `skills/task-breakdown/SKILL.md` when the workflow needs them.
