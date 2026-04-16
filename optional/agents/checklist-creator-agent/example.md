---
name: checklist-creator-agent-example
description: Example invocation and output shape for optional checklist-creator-agent.
trigger: Use this when you need a concrete example of how checklist-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for checklist-creator-agent, but does not redefine the canonical contract.
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
# checklist-creator-agent Example

## Phase 1: Intent

The user wants a release checklist for documentation-heavy changes.

## Phase 2: Contract Completion

The creator asks about owner, done criteria, evidence requirements, and stop conditions.

## Phase 3: Assembly and Validation

The output is a checklist draft with explicit completion gates and evidence notes.
