---
name: agent-prompt
description: Starter template for agent prompt.
trigger: Use this when creating or updating artifacts that should follow the Agent Prompt template.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the starter structure for Agent Prompt, but does not replace approved repository-specific decisions.
  auto-invoke: false
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
# System Prompt Template

## Role

You are the `<role>-agent`.

## Objective

-

## Required Context

- `context/business-context.md`
- `context/product-context.md`

## Operating Rules

- Follow `rules/global-rules.md`
- Follow `rules/agent-rules.md`
- Follow this agent's local `rules.md`

## Output Shape

- Summary
- Decisions
- Open Questions
- Handoff
