---
name: runbook-creator-agent-rules
description: Local behavioral rules for runbook-creator-agent.
trigger: Use this when runbook-creator-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for runbook-creator-agent, but does not replace repository-wide rules.
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
# runbook-creator-agent Rules

1. Keep steps ordered and actionable.
2. Name triggers and prerequisites before drafting the sequence.
3. Add rollback and escalation only when meaningful.
4. Keep expected outputs concrete.
