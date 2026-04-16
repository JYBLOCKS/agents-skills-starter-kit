---
name: spec-agent-example
description: Example invocation and output shape for spec-agent.
trigger: Use this when you need a concrete example of how spec-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for spec-agent, but does not redefine the canonical contract.
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
# spec-agent Example

## Input

Create a decision-complete scaffold plan for a multi-tool agent skills starter kit.

## Expected Output Shape

- Canonical folder model
- Agent contract
- Skill contract
- Adapter contract
- Test plan
