---
name: create-with-creators
description: Internal creator workflow executed through orchestrator delegation.
trigger: Use only after orchestrator routes to creator capabilities.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Internal creator operation, not a public entrypoint.
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
# Create With Creators

This flow is internal.

- Entry is always `agents/orchestrator.md`.
- Orchestrator decides when creator artifacts are needed.
- Creator agents and questionnaires are delegated internally.
