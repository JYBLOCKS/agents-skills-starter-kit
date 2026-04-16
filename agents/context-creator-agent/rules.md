---
name: context-creator-agent-rules
description: Local behavioral rules for context-creator-agent.
trigger: Use this when context-creator-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for context-creator-agent, but does not replace repository-wide rules.
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
# context-creator-agent Rules

1. Keep context reusable across tasks.
2. Name intended consumers explicitly.
3. Capture freshness and source notes when they matter.
4. Avoid turning transient chat notes into durable context.
