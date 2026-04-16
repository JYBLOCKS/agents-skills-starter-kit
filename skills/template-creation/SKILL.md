---
name: template-creation
description: guide and workflow for template-creation.
trigger: Use this when template-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the template-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# template-creation

## Purpose

Guide the creation of reusable templates with meaningful placeholders, safe defaults, and clear contract coverage.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- template request
- `creators/questionnaires/template.yaml`
- `templates/README.md`

## Outputs

- template creation package
- drafted template file or package
- validation checklist

## Guardrails

- Ask for the target artifact type first.
- Prefer safe defaults over clever ones.
- Make placeholders easy to identify and replace.

## Process

1. Run intake and normalize the template target path.
2. Collect required sections, placeholders, and default choices.
3. Draft the template and validate it.

## Adapter Notes

- generic: tie the template to the governing contract when one exists.
