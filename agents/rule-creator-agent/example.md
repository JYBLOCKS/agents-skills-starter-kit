---
name: rule-creator-agent-example
description: Example invocation and output shape for rule-creator-agent.
trigger: Use this when you need a concrete example of how rule-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for rule-creator-agent, but does not redefine the canonical contract.
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
# rule-creator-agent Example

## Phase 1: Intent

The user wants a new set of documentation rules for all future contributors.

## Phase 2: Contract Completion

The creator asks about audience, enforcement strength, exclusions, and precedence relative to global rules.

## Phase 3: Assembly and Validation

The output includes a draft rules file and a validation checklist that confirms the rules are explicit and non-contradictory.
