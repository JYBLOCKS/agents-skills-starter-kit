---
name: spec-ready
description: Checklist and done criteria for Spec Ready.
trigger: Use this when deciding whether the Spec Ready gate is satisfied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns done criteria for Spec Ready, but does not replace the work itself.
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
# Spec Ready Checklist

- Problem statement is concrete and bounded.
- Goals and non-goals are both present.
- Constraints and dependencies are captured.
- Interfaces or outputs are specific enough to implement.
- Acceptance criteria are testable.
