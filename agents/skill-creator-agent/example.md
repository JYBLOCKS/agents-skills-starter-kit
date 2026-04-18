---
name: skill-creator-agent-example
description: Example invocation and output shape for skill-creator-agent
trigger: Use this when you need a concrete example of how skill-creator-agent should be invoked or how it should respond
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns a reference example for skill-creator-agent, but does not redefine the canonical contract
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# skill-creator-agent Example
# Phase 1: IntentThe user wants a skill that prepares changelog drafts from merged work.
# Phase 2: Contract CompletionThe creator asks about triggers, supported tools, required inputs, outputs, guardrails, and whether references or scripts are needed.
# Phase 3: Assembly and ValidationThe output includes the full draft for `skills/changelog-prep/SKILL.md` with the structured metadata block, workflow, checklist, non-negotiable rules, and any inline example needed for clarity.
