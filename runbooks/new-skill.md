---
name: new-skill
description: Internal checklist for adding a flat skill file.
trigger: Use only when orchestrator delegates skill-extension work.
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
# New Skill

Internal delegated steps:

1. Copy `templates/skill.md`.
2. Create `skills/<name>.md`.
3. Fill required contract sections.
4. Update references and validators if needed.
