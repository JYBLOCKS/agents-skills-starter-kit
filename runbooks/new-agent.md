---
name: new-agent
description: Repeatable workflow document for New Agent.
trigger: Use this when you need the repeatable workflow documented in New Agent.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for New Agent, but does not replace underlying contracts or repository rules.
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
# New Agent Runbook

1. Copy `templates/agent/`.
2. Name the folder `<role>-agent`.
3. Fill in mission, boundaries, inputs, outputs, and dependencies.
4. Attach the right checklist and context references.
5. Add one realistic invocation and one handoff example.
6. Update the adapter docs if the tool needs a special mapping.
