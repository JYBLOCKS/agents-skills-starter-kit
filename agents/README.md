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

## Creator Agents

This repository also ships creator agents that guide users through artifact generation for agents, skills, rules, specs, context, runbooks, checklists, adapters, and templates.
