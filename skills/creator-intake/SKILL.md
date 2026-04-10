# creator-intake

## Purpose

Run the first creator phase: detect the artifact family, clarify the requested outcome, normalize the likely name/path, and identify dependent artifacts before drafting begins.

## Supported Tools

- generic
- openai
- claude-code
- opencode
- cursor
- windsurf
- aider

## Inputs

- raw creation request
- creator matrix
- repository structure

## Outputs

- artifact family
- normalized target name/path
- dependency notes
- missing intent questions

## Guardrails

- Do not draft files in this phase.
- Resolve the artifact family before asking contract-specific questions.
- Preserve the user's language while normalizing names and paths.

## Process

1. Map the request to an artifact family using `creators/matrix.md`.
2. Normalize the expected path pattern.
3. Identify missing dependencies or ambiguous targets.

## Adapter Notes

- generic: use this before every specialized creator skill.
