# repo-analysis

## Purpose

Inspect a repository and summarize the current structure, important patterns, risks, and likely change surfaces before planning or implementation.

## Supported Tools

- generic
- openai
- claude-code
- opencode
- cursor
- windsurf
- aider

## Inputs

- target repository or workspace
- user request or mission

## Outputs

- repository summary
- candidate entry points
- risk notes
- suggested files or folders to inspect next

## Guardrails

- Prefer observation over assumption.
- Separate discovered facts from inferred patterns.
- Do not propose implementation before grounding in the current repo.

## Process

1. Inspect root structure and key docs.
2. Identify existing contracts, naming, and workflow clues.
3. Summarize what matters for the task at hand.

## Adapter Notes

- generic: use shell and file reads.
- openai: map findings into the active tool context before planning.
