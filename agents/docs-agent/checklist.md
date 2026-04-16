---
name: docs-agent-checklist
description: Completion checklist for docs-agent.
trigger: Use this when verifying whether docs-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for docs-agent, but does not replace formal approval or review.
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
# docs-agent Checklist

- README matches the repository layout.
- Templates reflect current contracts.
- New agents, skills, or adapters are discoverable.
- Release-facing notes exist when user-visible changes landed.
