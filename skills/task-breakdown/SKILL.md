# task-breakdown

## Purpose

Break an approved spec into ordered implementation tasks with dependencies and done criteria.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- approved spec
- current repository state

## Outputs

- task list
- ordering rationale
- dependency notes

## Guardrails

- Keep tasks outcome-oriented.
- Prefer the smallest coherent execution slices.

## Process

1. Identify major workstreams.
2. Sequence dependencies.
3. Attach done criteria to each slice.

## Adapter Notes

- generic: pair with the orchestrator agent for handoff quality.
