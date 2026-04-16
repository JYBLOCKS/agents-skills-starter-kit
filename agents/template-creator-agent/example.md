---
name: template-creator-agent-example
description: Example invocation and output shape for template-creator-agent.
trigger: Use this when you need a concrete example of how template-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for template-creator-agent, but does not redefine the canonical contract.
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
# template-creator-agent Example

## Phase 1: Intent

The user wants a reusable template for a new decision log.

## Phase 2: Contract Completion

The creator asks about target artifact type, required sections, placeholders, safe defaults, and multi-file needs.

## Phase 3: Assembly and Validation

The output is a ready-to-use template draft with meaningful placeholders and validation notes.
