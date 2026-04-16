---
name: adapter-generation
description: Optional skill package for adapter-generation.
trigger: Use this when adapter-generation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the adapter-generation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
