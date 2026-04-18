---
name: creator-intake
description: guide and workflow for creator-intake
trigger: Use this when creator-intake is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the creator-intake workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection
  auto-invoke: true
tools: shared/tool-permissions.md#standard-tool-set
---
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
