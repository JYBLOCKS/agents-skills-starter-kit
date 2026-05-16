---
name: creators
description: Internal creator system for orchestrator-delegated artifact generation.
trigger: Use when orchestrator delegates creator work.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Internal extension system, not a public workflow entry.
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
# Creators

Creators are internal capabilities invoked only through `agents/orchestrator.md` delegation.

They are not a public starting point.

## Internal Flow

1. Orchestrator identifies missing reusable artifact.
2. Orchestrator delegates to creator agents and skills.
3. Creator outputs are validated and merged into canonical flow docs/contracts.
