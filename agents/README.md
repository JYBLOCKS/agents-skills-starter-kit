---
name: agents
description: Catalog and structure overview for the starter kit agent packages
trigger: Use this when browsing the available Agents resources in the repository
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Agents, but does not replace the canonical documents it references
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# Agents

Agents are decision-making packages that coordinate work, apply context, and hand off outputs.
## Canonical Package Contents

- `agent.md`: role, mission, scope, triggers, inputs, outputs, dependencies
- `prompt.md`: starter prompt that tool adapters can reuse or transform
- `rules.md`: local behavioral rules
- `checklist.md`: completion criteria for the role
- `handoff-template.md`: standard output format to downstream agents
- `example.md`: realistic invocation and response shape
## Shared Contracts

- Global rules: `rules/global-rules.md`
- Agent rules: `rules/agent-rules.md`
- Shared context: `context/`
- Shared runbooks: `runbooks/`
- Creator extensions: `creators/AGENT-CONTRACT.md`
## Delivery Agents

The minimal starter flow is built around:
- `business-agent`
- `spec-agent`
- `orchestrator-agent`
- `implementation-agent`
- `review-agent`
- `docs-agent`

Creator agents also live under `agents/` and follow the same package conventions.
