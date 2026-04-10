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
- `creators/questionnaires/runbook.yaml`
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
