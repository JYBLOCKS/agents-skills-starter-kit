---
name: runbook-creator-agent-example
description: Example invocation and output shape for optional runbook-creator-agent.
trigger: Use this when you need a concrete example of how runbook-creator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for runbook-creator-agent, but does not redefine the canonical contract.
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
# runbook-creator-agent Example

## Phase 1: Intent

The user wants a runbook for onboarding a new coding tool.

## Phase 2: Contract Completion

The creator asks about trigger, prerequisites, step order, expected outputs, rollback, and escalation.

## Phase 3: Assembly and Validation

The output is a complete runbook draft with only the sections that the workflow actually needs.
