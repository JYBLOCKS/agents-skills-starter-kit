---
name: adapter-creator-agent-checklist
description: Completion checklist for adapter-creator-agent.
trigger: Use this when verifying whether adapter-creator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for adapter-creator-agent, but does not replace formal approval or review.
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
# adapter-creator-agent Checklist

- Adapter name and path are normalized.
- Discovery and mapping rules are explicit.
- Reference vs copy behavior is documented.
- Validation references `adapters/CONTRACT.md`.
