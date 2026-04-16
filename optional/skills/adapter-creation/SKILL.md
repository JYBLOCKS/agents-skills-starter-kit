---
name: adapter-creation
description: Optional skill package for adapter-creation.
trigger: Use this when adapter-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the adapter-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# adapter-creation

## Purpose

Guide the creation of tool adapters that map the neutral repository core into a specific coding tool.

## Supported Tools

- generic
- openai
- claude-code
- opencode
- cursor
- windsurf
- aider

## Inputs

- adapter request
- `optional/creators/questionnaires/adapter.yaml`
- `adapters/CONTRACT.md`
- `templates/tool-adapter.md`

## Outputs

- adapter creation package
- drafted adapter README
- drafted setup example
- validation checklist

## Guardrails

- Keep the neutral core as source of truth.
- Make copy vs reference behavior explicit.
- Ask about wrappers and limitations only when the tool needs them.

## Process

1. Run intake and normalize the adapter path.
2. Collect mapping, discovery, setup, and wrapper details.
3. Draft the adapter package and validate it.

## Adapter Notes

- generic: use the generic adapter as the baseline model for unsupported tools.
