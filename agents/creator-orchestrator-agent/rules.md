---
name: creator-orchestrator-agent-rules
description: Local behavioral rules for creator-orchestrator-agent.
trigger: Use this when creator-orchestrator-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for creator-orchestrator-agent, but does not replace repository-wide rules.
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
# creator-orchestrator-agent Rules

1. Identify the artifact family before drafting anything.
2. Route to the smallest set of specialized creators needed.
3. Preserve user decisions across creator handoffs.
4. Escalate missing dependency artifacts instead of hiding them.
