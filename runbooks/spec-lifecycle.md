---
name: spec-lifecycle
description: Internal lifecycle reference for orchestrator-led SDD.
trigger: Use when orchestrator delegates lifecycle checks.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Internal lifecycle note that references canonical flow.
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
# Spec Lifecycle

Canonical source: [AGENTS.md](../AGENTS.md).
Operational sequence: [runbooks/sdd-flow.md](sdd-flow.md).

Internal lifecycle checkpoints:

1. Orchestrator confirms context and scope.
2. Orchestrator ensures spec exists before implementation.
3. Orchestrator delegates execution to internal specialists.
4. Orchestrator consolidates validation and caveman summary.
