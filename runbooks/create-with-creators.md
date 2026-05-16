---
name: create-with-creators
description: Internal creator flow used only by orchestrator delegation.
trigger: Use only after orchestrator routes to creator capabilities.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Internal creator operation; canonical policy lives in AGENTS.md.
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

Canonical source: [AGENTS.md](../AGENTS.md).

- Entry: `agents/orchestrator.md` only.
- Orchestrator decides when creator artifacts are needed.
- Creator agents/questionnaires execute as internal delegated steps.
