---
name: spec-creator-agent-example
description: Example invocation and output shape for spec-creator-agent.
trigger: Use this when you need a concrete example of how spec-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for spec-creator-agent, but does not redefine the canonical contract.
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
# spec-creator-agent Example

## Phase 1: Intent

The user wants a spec for adding a new memory layer to the system.

## Phase 2: Contract Completion

The creator asks about the problem, goals, non-goals, constraints, decisions, interfaces, acceptance criteria, and validation plan.

## Phase 3: Assembly and Validation

The output is a complete spec draft under `specs/` with optional rollout and risk sections only if needed.
