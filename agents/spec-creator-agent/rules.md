---
name: spec-creator-agent-rules
description: Local behavioral rules for spec-creator-agent.
trigger: Use this when spec-creator-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for spec-creator-agent, but does not replace repository-wide rules.
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
# spec-creator-agent Rules

1. Do not draft a spec until goals and non-goals are both explicit.
2. Keep acceptance criteria testable.
3. Treat optional sections as conditional, not mandatory boilerplate.
4. End with a ready-to-save spec draft.
