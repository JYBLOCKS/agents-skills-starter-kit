---
name: spec-creation
description: guide and workflow for spec-creation.
trigger: Use this when spec-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the spec-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
  auto-invoke: true
allowed-tools:
  - generic
  - openai
  - claude-code
  - opencode
  - cursor
  - windsurf
  - github-copilot
  - cline
  - gemini-cli
  - codex
---
# spec-creation

## Purpose

Guide the creation of a full spec document using the repository's required and optional spec sections.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- spec request
- `creators/questionnaires/spec.yaml`
- `specs/CONTRACT.md`
- `templates/spec/spec.md`

## Outputs

- spec creation package
- drafted spec content
- validation checklist

## Guardrails

- Ask all required spec questions before drafting.
- Include optional sections only when relevant.
- Keep acceptance criteria testable.

## Process

1. Run intake and normalize the spec path.
2. Collect required spec fields and any triggered optional sections.
3. Draft the spec and validate it.

## Adapter Notes

- generic: keep implementation detail proportional to the user's request.
