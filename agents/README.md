---
name: agents
description: Catalog and structure overview for the core agent packages.
trigger: Use this when browsing the available Agents resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Agents, but does not replace the canonical documents it references.
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
- Optional creator extensions: `optional/creators/AGENT-CONTRACT.md`

## Core Agents

The minimal starter flow is built around:

- `business-agent`
- `spec-agent`
- `orchestrator-agent`
- `implementation-agent`
- `review-agent`
- `docs-agent`

Optional creator agents live under `optional/agents/`.
