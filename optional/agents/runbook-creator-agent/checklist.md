---
name: runbook-creator-agent-checklist
description: Completion checklist for optional runbook-creator-agent.
trigger: Use this when verifying whether runbook-creator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for runbook-creator-agent, but does not replace formal approval or review.
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
# runbook-creator-agent Checklist

- Runbook name and path are normalized.
- Trigger and prerequisites are explicit.
- Ordered steps are complete.
- Validation references the runbook questionnaire.
