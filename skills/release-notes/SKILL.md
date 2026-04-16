---
name: release-notes
description: guide and workflow for release-notes.
trigger: Use this when release-notes is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the release-notes workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# release-notes

## Purpose

Summarize shipped changes for contributors, maintainers, or downstream adopters.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- change summary
- affected areas

## Outputs

- release note draft
- user-facing highlights
- upgrade notes when relevant

## Guardrails

- Focus on externally meaningful change.
- Separate breaking changes from normal additions.

## Process

1. Group changes by user-facing impact.
2. Note new workflows and templates.
3. Call out migration or adoption implications.

## Adapter Notes

- generic: optional for internal-only changes.
