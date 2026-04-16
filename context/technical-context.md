---
name: technical-context
description: Reusable shared context for Technical Context.
trigger: Use this when work depends on stable shared context from Technical Context.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns stable shared context for Technical Context, but does not replace approved specs or current repository facts.
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
# Technical Context

## Core Design

- Markdown is the source of truth for human-facing artifacts.
- YAML is used for lightweight metadata where tools need structured discovery.
- Adapters translate the neutral core into tool-specific layouts and conventions.

## Repository Contracts

- Agents own orchestration and decision boundaries.
- Skills own repeatable capabilities.
- Specs own approved implementation intent.
- Rules constrain behavior globally, locally, and per tool.

## Compatibility Goal

Any tool should be able to consume this repo by:

1. Reading the shared context and rules.
2. Selecting an adapter or the generic fallback.
3. Resolving agent and skill definitions from the canonical contracts.
