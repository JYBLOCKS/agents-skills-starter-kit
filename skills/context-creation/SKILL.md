---
name: context-creation
description: guide and workflow for context-creation.
trigger: Use this when context-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the context-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# context-creation

## Purpose

Guide the creation of reusable context documents with clear ownership, consumers, durability, and freshness expectations.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- context request
- `creators/questionnaires/context.yaml`
- `context/README.md`

## Outputs

- context creation package
- drafted context content
- validation checklist

## Guardrails

- Preserve only reusable information.
- Ask about source decisions and freshness only when relevant.
- Keep intended consumers explicit.

## Process

1. Run intake and normalize the context path.
2. Collect required context fields and any conditional freshness/source data.
3. Draft the document and validate it.

## Adapter Notes

- generic: prefer durable facts over transient notes.
