---
name: business-agent-example
description: Example invocation and output shape for business-agent.
trigger: Use this when you need a concrete example of how business-agent should be invoked or how it should respond.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for business-agent, but does not redefine the canonical contract.
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
# business-agent Example

## Input

We need this repo to work across OpenAI, Claude Code, and OpenCode without duplicating every prompt.

## Expected Output Shape

- Shared neutral core is required
- Adapters are explicit deliverables
- Runtime implementation is out of scope for v1
