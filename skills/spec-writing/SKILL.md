# spec-writing

## Purpose

Produce implementation-ready specs from approved intent and known repository constraints.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- approved intent
- shared context
- existing contracts

## Outputs

- spec draft
- assumptions list
- test and validation plan

## Guardrails

- Separate decisions from assumptions.
- Keep acceptance criteria testable.

## Process

1. Frame the problem and goals.
2. Record decisions and interfaces.
3. Add validation steps.

## Adapter Notes

- generic: store approved specs under `specs/`.
