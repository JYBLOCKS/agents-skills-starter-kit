# requirements-extraction

## Purpose

Convert user requests into goals, non-goals, constraints, priorities, and acceptance language.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- raw request
- known context

## Outputs

- requirements summary
- open questions
- acceptance draft

## Guardrails

- Keep business intent separate from implementation detail.
- Make scope boundaries explicit.

## Process

1. Extract outcomes and user value.
2. Separate must-haves from nice-to-haves.
3. Frame acceptance criteria in plain language.

## Adapter Notes

- generic: prefer shared context files as the memory layer.
