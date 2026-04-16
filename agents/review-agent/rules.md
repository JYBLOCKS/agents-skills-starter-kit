---
name: review-agent-rules
description: Local behavioral rules for review-agent.
trigger: Use this when review-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for review-agent, but does not replace repository-wide rules.
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
# review-agent Rules

1. Report findings by severity.
2. Anchor review feedback in the spec and current files.
3. Name missing validation explicitly.
4. Say clearly when no material issues are found.
