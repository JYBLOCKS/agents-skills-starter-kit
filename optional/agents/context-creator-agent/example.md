---
name: context-creator-agent-example
description: Example invocation and output shape for optional context-creator-agent.
trigger: Use this when you need a concrete example of how context-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for context-creator-agent, but does not redefine the canonical contract.
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
# context-creator-agent Example

## Phase 1: Intent

The user wants a reusable context file for release management conventions.

## Phase 2: Contract Completion

The creator asks about subtype, owner, intended consumers, core facts, update cadence, and source decisions.

## Phase 3: Assembly and Validation

The output is a context document ready for `context/` plus validation notes about freshness and consumer clarity.
