---
name: gemini-cli-example-setup
description: Example installation and bootstrap steps for gemini-cli.
trigger: Use this when you need a concrete install and bootstrap example for gemini-cli.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for gemini-cli, but does not replace the adapter contract or canonical repository structure.
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
# Gemini CLI Example Setup

1. Install the native extension with `gemini extensions install https://github.com/JYBLOCKS/agents-skills-starter-kit`.
2. Restart Gemini CLI and confirm the extension appears.
3. Use `AGENTS.md` for routing and `GEMINI.md` as the Gemini-specific bootstrap.
