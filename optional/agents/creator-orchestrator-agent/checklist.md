---
name: creator-orchestrator-agent-checklist
description: Completion checklist for optional creator-orchestrator-agent.
trigger: Use this when verifying whether creator-orchestrator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for creator-orchestrator-agent, but does not replace formal approval or review.
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
# creator-orchestrator-agent Checklist

- Artifact family is identified.
- Correct specialized creator is selected.
- Dependency creators are listed when needed.
- Final handoff references the creation package contract.
