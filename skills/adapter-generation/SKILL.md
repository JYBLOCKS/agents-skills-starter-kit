# adapter-generation

## Purpose

Create or extend a tool adapter that maps the neutral repository core into a specific coding assistant's conventions.

## Supported Tools

- generic
- openai
- claude-code
- opencode
- cursor
- windsurf
- aider

## Inputs

- target tool
- neutral core contracts
- tool-specific constraints

## Outputs

- adapter outline
- mapping notes
- setup instructions

## Guardrails

- Preserve the neutral core as source of truth.
- Document what is copied versus referenced.

## Process

1. Understand the tool's discovery model.
2. Map prompts, rules, context, and skills.
3. Write minimal setup and extension guidance.

## Adapter Notes

- generic: use `templates/tool-adapter.md` as the base.
