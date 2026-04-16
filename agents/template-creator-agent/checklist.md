---
name: template-creator-agent-checklist
description: Completion checklist for template-creator-agent.
trigger: Use this when verifying whether template-creator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for template-creator-agent, but does not replace formal approval or review.
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
# template-creator-agent Checklist

- Template target path is normalized.
- Required sections are complete.
- Placeholders and defaults are explicit.
- Validation references the template questionnaire.
