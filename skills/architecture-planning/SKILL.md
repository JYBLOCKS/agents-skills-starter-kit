# architecture-planning

## Purpose

Shape the system structure, contracts, and boundaries needed to implement a request safely.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- approved intent
- current repository patterns

## Outputs

- structural proposal
- contract notes
- dependency and boundary map

## Guardrails

- Favor the existing repository style when it is usable.
- Do not invent unnecessary abstraction.

## Process

1. Identify the neutral core.
2. Define system boundaries and contracts.
3. Name the minimum set of folders and templates required.

## Adapter Notes

- generic: express the result in Markdown first.
