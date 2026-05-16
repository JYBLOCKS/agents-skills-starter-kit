---
name: sdd-flow
description: Canonical orchestrator-led SDD workflow.
trigger: Use this as the single operational runbook.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Defines the only public workflow path in this repository.
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
# SDD Flow

## Public Entry

- [agents/orchestrator.md](../agents/orchestrator.md)

## Required Assets

- [skills/spec-driven-development.md](../skills/spec-driven-development.md)
- [skills/test-driven-development.md](../skills/test-driven-development.md)
- [skills/caveman.md](../skills/caveman.md)
- [checklists/sdd-delivery-ready.md](../checklists/sdd-delivery-ready.md)
- [templates/sdd-fast-forward.md](../templates/sdd-fast-forward.md)

## Canonical Sequence

1. Discovery: orchestrator clarifies missing information.
2. Context: orchestrator reads and updates context artifacts.
3. Spec: create or update the governing spec before implementation.
4. Delegation: orchestrator routes to internal specialists only as needed.
5. Implementation and tests: enforce TDD and acceptance coverage.
6. Validation: run structure, SDD, docs, and target checks.
7. Summary: publish concise caveman output with risks and next action.

## Constraints

- No alternate public entrypoints.
- No implementation before spec.
- No task completion with failing required tests.
