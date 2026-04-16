---
name: agent-creation
description: guide and workflow for agent-creation.
trigger: Use this when agent-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the agent-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
  auto-invoke: true
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
# agent-creation

## Purpose

Guide the full creation of a new agent package from interview answers, repository contracts, and existing templates.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- agent request
- `creators/questionnaires/agent.yaml`
- `agents/CONTRACT.md`
- `templates/agent/`

## Outputs

- full agent creation package
- complete drafts for all canonical agent files
- validation checklist

## Guardrails

- Ask every required question before drafting.
- Normalize the folder to `agents/<role>-agent/`.
- Draft all canonical files, not just `agent.md`.

## Process

1. Run intake and confirm the target path.
2. Collect required agent contract fields plus conditional questions.
3. Draft the full creation package and validate it.

## Adapter Notes

- generic: pair with `creator-intake` and `creator-validation`.
