---
name: review-ready
description: Checklist and done criteria for Review Ready.
trigger: Use this when deciding whether the Review Ready gate is satisfied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns done criteria for Review Ready, but does not replace the work itself.
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
# Review Ready Checklist

- Scope matches the approved spec.
- Behavior changes are called out.
- Tests or validation evidence are present.
- Rule exceptions are documented.
- Follow-up work is separated from this change.
