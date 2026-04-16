---
name: skill-creator-agent-example
description: Example invocation and output shape for skill-creator-agent.
trigger: Use this when you need a concrete example of how skill-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for skill-creator-agent, but does not redefine the canonical contract.
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
# skill-creator-agent Example

## Phase 1: Intent

The user wants a skill that prepares changelog drafts from merged work.

## Phase 2: Contract Completion

The creator asks about triggers, supported tools, required inputs, outputs, guardrails, and whether references or scripts are needed.

## Phase 3: Assembly and Validation

The output includes the full draft for `skills/changelog-prep/SKILL.md` with the structured metadata block, workflow, checklist, non-negotiable rules, and any inline example needed for clarity.
