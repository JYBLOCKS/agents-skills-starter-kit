---
name: spec-creator-agent-checklist
description: Completion checklist for optional spec-creator-agent.
trigger: Use this when verifying whether spec-creator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for spec-creator-agent, but does not replace formal approval or review.
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
# spec-creator-agent Checklist

- Required spec fields are complete.
- Optional sections appear only when relevant.
- Acceptance criteria are testable.
- Validation references `specs/CONTRACT.md`.
