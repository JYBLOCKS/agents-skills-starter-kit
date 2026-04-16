---
name: claude-code-example-setup
description: Example installation and bootstrap steps for claude-code.
trigger: Use this when you need a concrete install and bootstrap example for claude-code.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for claude-code, but does not replace the adapter contract or canonical repository structure.
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
# Claude Code Example Setup

For spec work:

- start with `agents/spec-agent/prompt.md`
- include `rules/global-rules.md`
- include `rules/agent-rules.md`
- include `agents/spec-agent/rules.md`
- attach the needed files from `context/` and `specs/`
