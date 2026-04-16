---
name: github-copilot-example-setup
description: Example installation and bootstrap steps for github-copilot.
trigger: Use this when you need a concrete install and bootstrap example for github-copilot.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an example install path for github-copilot, but does not replace the adapter contract or canonical repository structure.
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
# GitHub Copilot Example Setup

1. Install with `npx skills add JYBLOCKS/agents-skills-starter-kit -a github-copilot`.
2. Open the repository.
3. Read `AGENTS.md`, then load the agent-local rules and required context files.
