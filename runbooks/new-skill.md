---
name: new-skill
description: Repeatable workflow document for New Skill.
trigger: Use this when you need the repeatable workflow documented in New Skill.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for New Skill, but does not replace underlying contracts or repository rules.
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
# New Skill Runbook

1. Copy `templates/skill/`.
2. Fill in metadata first so supported tools are explicit.
3. Define the smallest useful input/output contract.
4. Add guardrails and a worked example.
5. Add adapter-specific notes only where needed.
