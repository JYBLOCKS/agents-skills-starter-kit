---
name: new-tool-adapter
description: Repeatable workflow document for New Tool Adapter.
trigger: Use this when you need the repeatable workflow documented in New Tool Adapter.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for New Tool Adapter, but does not replace underlying contracts or repository rules.
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
# New Tool Adapter Runbook

1. Copy `templates/tool-adapter.md`.
2. Describe how the tool discovers prompts, rules, and context.
3. Map the shared contracts into the tool's preferred layout.
4. Explain what is referenced versus copied.
5. Add a minimum setup example.
6. Update the adapter matrix in the README.
