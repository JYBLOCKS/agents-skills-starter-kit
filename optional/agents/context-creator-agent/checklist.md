---
name: context-creator-agent-checklist
description: Completion checklist for optional context-creator-agent.
trigger: Use this when verifying whether context-creator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for context-creator-agent, but does not replace formal approval or review.
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
# context-creator-agent Checklist

- Context subtype and owner are explicit.
- Intended consumers are named.
- Durable facts are separated from temporary notes.
- Validation references the context questionnaire.
