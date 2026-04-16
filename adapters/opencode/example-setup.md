---
name: opencode-example-setup
description: Example installation and bootstrap steps for opencode.
trigger: Use this when you need a concrete install and bootstrap example for opencode.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for opencode, but does not replace the adapter contract or canonical repository structure.
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
# OpenCode Example Setup

For implementation work:

- start with `agents/implementation-agent/prompt.md`
- include `rules/global-rules.md`
- include `agents/implementation-agent/rules.md`
- attach the approved spec and technical context
- reference `skills/repo-analysis/` and `skills/test-planning/`
