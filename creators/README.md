---
name: creators
description: Internal creator system for orchestrator-delegated artifact generation.
trigger: Use when orchestrator delegates creator work.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Internal extension system; canonical routing policy is in AGENTS.md.
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

Canonical source: [AGENTS.md](../AGENTS.md).

Creators are internal capabilities invoked only through orchestrator delegation.
