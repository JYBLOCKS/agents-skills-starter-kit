---
name: checklist-creator-agent-rules
description: Local behavioral rules for optional checklist-creator-agent.
trigger: Use this when checklist-creator-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for checklist-creator-agent, but does not replace repository-wide rules.
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
# checklist-creator-agent Rules

1. Keep checklist items concrete.
2. Attach evidence expectations to high-stakes checks.
3. Ask for stop conditions only when the workflow can meaningfully halt.
4. Distinguish the checklist from the runbook when both might be needed.
