---
name: end-to-end-example
description: Internal example aligned to the single canonical workflow.
trigger: Use when a short internal example is needed.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Demonstrates orchestrator-led flow without introducing alternate routes.
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
# End-to-End Example

Canonical source: [AGENTS.md](../AGENTS.md).

Scenario:
- User requests a new reusable capability.

Flow:
1. Start at [agents/orchestrator.md](../agents/orchestrator.md).
2. Orchestrator runs discovery and updates spec.
3. Orchestrator delegates implementation and validation internally.
4. Orchestrator returns caveman summary with risks and next action.
