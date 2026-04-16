---
name: creator-orchestrator-agent-example
description: Example invocation and output shape for optional creator-orchestrator-agent.
trigger: Use this when you need a concrete example of how creator-orchestrator-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for creator-orchestrator-agent, but does not redefine the canonical contract.
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
# creator-orchestrator-agent Example

## Phase 1: Intent

User asks for help creating a new adapter for a coding tool.

## Phase 2: Contract Completion

The agent identifies `adapter-creator-agent`, points it to `optional/creators/questionnaires/adapter.yaml`, and notes that a README update may also require `docs-agent`.

## Phase 3: Assembly and Validation

The final output is a creation package for `adapters/<tool-name>/` with README, setup example, and validation checklist.
