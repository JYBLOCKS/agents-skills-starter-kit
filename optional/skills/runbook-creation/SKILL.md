---
name: runbook-creation
description: Optional skill package for runbook-creation.
trigger: Use this when runbook-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the runbook-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# runbook-creation

## Purpose

Guide the creation of operational runbooks with explicit triggers, prerequisites, ordered steps, outputs, and escalation paths.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- runbook request
- `optional/creators/questionnaires/runbook.yaml`
- `runbooks/README.md`

## Outputs

- runbook creation package
- drafted runbook content
- validation checklist

## Guardrails

- Keep steps sequential and actionable.
- Ask about rollback and escalation only when the workflow needs them.
- Make expected outputs concrete.

## Process

1. Run intake and normalize the runbook path.
2. Collect required and conditional workflow fields.
3. Draft the runbook and validate it.

## Adapter Notes

- generic: do not turn the runbook into a spec unless the user asks for one.
