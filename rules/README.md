---
name: rules
description: Catalog and usage guidance for shared repository rules.
trigger: Use this when browsing the available Rules resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Rules, but does not replace the canonical documents it references.
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
# Rules System

Rules are layered:

- `global-rules.md`: applies to the whole repository
- `agent-rules.md`: applies to all agents unless locally overridden
- `skill-rules.md`: applies to all skills unless locally overridden
- adapter rules: live under each adapter folder

Keep rules short, behavioral, and testable.
