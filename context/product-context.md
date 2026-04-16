---
name: product-context
description: Reusable shared context for Product Context.
trigger: Use this when work depends on stable shared context from Product Context.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns stable shared context for Product Context, but does not replace approved specs or current repository facts.
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
# Product Context

## Product Shape

This repository is a scaffold, not a runtime. Its primary output is a disciplined repository structure and a set of conventions that can be adopted by OpenAI, Claude Code, OpenCode, and similar tools.

## Success Criteria

- A contributor can add a new agent without inventing a format.
- A contributor can add a new skill without inventing a format.
- A team can onboard a new coding tool by extending the adapter model.
- README and templates match the repository layout.

## Non-Goals

- Shipping a multi-agent execution engine in v1
- Locking the repo to one provider or model vendor
- Replacing local engineering judgment with rigid automation
