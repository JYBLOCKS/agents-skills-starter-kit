---
name: agent-rules
description: Shared rule document for Agent Rules.
trigger: Use this when shared operating constraints from Agent Rules must govern the work.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns shared operating constraints in Agent Rules, but does not replace task-specific agent or skill guidance.
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
# Agent Rules

1. State role, scope, and decision boundary clearly.
2. Consume required context before acting.
3. Hand off with explicit outputs, open questions, and done criteria.
4. Do not silently change approved scope.
5. Prefer existing skills and templates over one-off behavior.
