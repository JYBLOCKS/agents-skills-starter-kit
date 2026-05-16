---
name: new-agent
description: Internal checklist for adding a flat agent file.
trigger: Use only when orchestrator delegates agent-extension work.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Internal extension workflow.
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
# New Agent

Internal delegated steps:

1. Copy `templates/agent.md`.
2. Create `agents/<role>.md`.
3. Fill required contract sections.
4. Update references and validators if needed.
