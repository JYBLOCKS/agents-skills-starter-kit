---
name: context
description: Catalog and usage guidance for shared repository context.
trigger: Use this when browsing the available Context resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Context, but does not replace the canonical documents it references.
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
# Context System

This folder holds reusable context for every agent, skill, and adapter.

## Files

- `business-context.md`: mission, users, value, KPIs, constraints
- `product-context.md`: product scope, active bets, priorities, acceptance language
- `technical-context.md`: architecture, standards, interfaces, dependencies
- `repo-context.md`: repository layout, ownership, workflows, naming
- `delivery-context.md`: lifecycle, review expectations, release readiness

## Rules

- Keep context stable and reusable.
- Put decisions here when multiple agents need them.
- Do not duplicate context inside individual agents unless the local override is intentional.
- Link to source specs when context is derived from a formal decision.
