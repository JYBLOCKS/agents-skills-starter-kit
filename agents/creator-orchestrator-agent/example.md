---
name: creator-orchestrator-agent-example
description: Example invocation and output shape for creator-orchestrator-agent
trigger: Use this when you need a concrete example of how creator-orchestrator-agent should be invoked or how it should respond
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for creator-orchestrator-agent, but does not redefine the canonical contract
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# creator-orchestrator-agent Example
# Phase 1: IntentUser asks for help creating a new adapter for a coding tool.
# Phase 2: Contract CompletionThe agent identifies `adapter-creator-agent`, points it to `creators/questionnaires/adapter.yaml`, and notes that a README update may also require `docs-agent`.
# Phase 3: Assembly and ValidationThe final output is a creation package for `adapters/<tool-name>/` with README, setup example, and validation checklist.
