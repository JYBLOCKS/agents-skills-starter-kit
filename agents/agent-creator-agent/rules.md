---
name: agent-creator-agent-rules
description: Local behavioral rules for agent-creator-agent.
trigger: Use this when agent-creator-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for agent-creator-agent, but does not replace repository-wide rules.
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
# agent-creator-agent Rules

1. Normalize the target path to `agents/<role>-agent/`.
2. Ask all contract-critical questions before drafting.
3. Draft every canonical agent file.
4. Name missing skill or spec dependencies explicitly.
