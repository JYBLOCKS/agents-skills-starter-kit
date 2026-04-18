---
name: orchestrator-agent-example
description: Example invocation and output shape for orchestrator-agent
trigger: Use this when you need a concrete example of how orchestrator-agent should be invoked or how it should respond
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for orchestrator-agent, but does not redefine the canonical contract
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# orchestrator-agent Example
# InputImplement the approved multi-tool starter kit spec and keep docs aligned.
# Expected Output Shape
- Route to `business-agent` only if strategy changed
- Route to `spec-agent` only if the spec is incomplete
- Route to `implementation-agent` for scaffold creation
- Route to `review-agent` for regression and quality review
- Route to `docs-agent` for README and template sync
