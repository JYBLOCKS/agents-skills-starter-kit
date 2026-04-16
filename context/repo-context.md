---
name: repo-context
description: Reusable shared context for Repo Context.
trigger: Use this when work depends on stable shared context from Repo Context.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns stable shared context for Repo Context, but does not replace approved specs or current repository facts.
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
# Repository Context

## Layout Principles

- Keep the neutral core in top-level folders.
- Make examples concrete enough to clone and adapt.
- Avoid hidden conventions; every important contract should be documented.

## Naming

- Agent folders use `<role>-agent`
- Skill folders use kebab-case capability names
- Specs use descriptive slugs plus an optional date or sequence

## Contribution Defaults

- Update docs when structure changes.
- Prefer additive examples over abstract prose.
- Keep templates minimal but decision-complete.
