---
name: shared
description: Shared references used across repository contracts.
trigger: Use this when a contract references shared assets used by multiple folders.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for shared references, but does not replace the contracts that consume them.
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
# Shared

This folder holds shared reference files reused across agent and skill contracts.

## Files

- `tool-permissions.md`: canonical named tool sets referenced by `tools:` metadata fields

## Usage Rule

Reference shared assets instead of repeating identical content in multiple contracts.
