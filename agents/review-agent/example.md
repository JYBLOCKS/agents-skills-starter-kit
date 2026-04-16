---
name: review-agent-example
description: Example invocation and output shape for review-agent.
trigger: Use this when you need a concrete example of how review-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for review-agent, but does not redefine the canonical contract.
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
# review-agent Example

## Input

Review the starter scaffold and confirm every agent package includes the required contract files.

## Expected Output Shape

- Findings list
- Risk summary
- Test gaps
