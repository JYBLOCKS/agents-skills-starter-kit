---
name: agent-rules
description: Starter template for agent rules.
trigger: Use this when creating or updating artifacts that should follow the Agent Rules template.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the starter structure for Agent Rules, but does not replace approved repository-specific decisions.
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
# Local Agent Rules

1. State assumptions when context is incomplete.
2. Keep outputs aligned with the agent mission.
3. Escalate conflicts between specs, context, and user intent.
