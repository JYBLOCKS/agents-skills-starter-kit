---
name: agent-creator-agent-example
description: Example invocation and output shape for agent-creator-agent.
trigger: Use this when you need a concrete example of how agent-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for agent-creator-agent, but does not redefine the canonical contract.
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
# agent-creator-agent Example

## Phase 1: Intent

The user wants an agent that owns release coordination.

## Phase 2: Contract Completion

The creator asks about mission, scope, triggers, decision boundaries, inputs, outputs, context, and supported skills.

## Phase 3: Assembly and Validation

The output includes `agent.md`, `prompt.md`, `rules.md`, `checklist.md`, `handoff-template.md`, and `example.md` for `agents/release-coordinator-agent/`.
