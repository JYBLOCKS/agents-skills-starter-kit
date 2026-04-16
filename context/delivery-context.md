---
name: delivery-context
description: Reusable shared context for Delivery Context.
trigger: Use this when work depends on stable shared context from Delivery Context.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns stable shared context for Delivery Context, but does not replace approved specs or current repository facts.
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
# Delivery Context

## Delivery Flow

1. Clarify business intent.
2. Write or update the governing spec.
3. Plan implementation and tests.
4. Execute work.
5. Review against rules and checklists.
6. Sync docs and release notes.

## Quality Gates

- Specs approved before implementation begins
- Checklists completed before handoff
- Review notes capture risks and missing evidence
- README stays aligned with shipped structure
