---
name: generic-example-setup
description: Example installation and bootstrap steps for generic.
trigger: Use this when you need a concrete install and bootstrap example for generic.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for generic, but does not replace the adapter contract or canonical repository structure.
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
# Generic Example Setup

1. Open the repo in your coding assistant.
2. Load `rules/global-rules.md` and the relevant agent prompt.
3. Attach `context/` files needed for the task.
4. Use `skills/*/SKILL.md` as callable capability references.
