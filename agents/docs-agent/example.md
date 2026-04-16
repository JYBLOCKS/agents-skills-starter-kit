---
name: docs-agent-example
description: Example invocation and output shape for docs-agent.
trigger: Use this when you need a concrete example of how docs-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for docs-agent, but does not redefine the canonical contract.
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
# docs-agent Example

## Input

The repository structure changed from a generic app starter to a multi-tool agent operating scaffold.

## Expected Output Shape

- README rewritten
- Template references checked
- Adapter matrix documented
