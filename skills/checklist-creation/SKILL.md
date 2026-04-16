---
name: checklist-creation
description: guide and workflow for checklist-creation.
trigger: Use this when checklist-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the checklist-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# checklist-creation

## Purpose

Guide the creation of checklists with explicit ownership, done criteria, evidence requirements, and stop conditions when relevant.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- checklist request
- `creators/questionnaires/checklist.yaml`
- `checklists/README.md`

## Outputs

- checklist creation package
- drafted checklist content
- validation checklist

## Guardrails

- Keep checklist items concrete.
- Ask about stop conditions only when the workflow can halt meaningfully.
- Include evidence requirements for important checks.

## Process

1. Run intake and normalize the checklist path.
2. Collect required checklist fields and conditional stop/dependency fields.
3. Draft the checklist and validate it.

## Adapter Notes

- generic: keep the checklist shorter than the related runbook when both exist.
