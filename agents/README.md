---
name: agents
description: Flat agent catalog with one public entrypoint.
trigger: Use when reviewing available agent roles.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Documents agent surface and entrypoint policy.
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
# Agents

Public entrypoint:

- `orchestrator.md`

All other agent files are internal delegates selected by orchestrator.
