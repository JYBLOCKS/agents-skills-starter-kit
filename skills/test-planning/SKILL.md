# test-planning

## Purpose

Define the right level of validation for a change based on scope, blast radius, and user impact.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- approved spec
- implementation scope

## Outputs

- validation checklist
- test scenarios
- evidence expectations

## Guardrails

- Match validation depth to risk.
- Include documentation checks when repository structure changes.

## Process

1. Assess scope and risk.
2. Propose minimal sufficient checks.
3. Note evidence required for review.

## Adapter Notes

- generic: use repo-level acceptance checks for scaffold work.
