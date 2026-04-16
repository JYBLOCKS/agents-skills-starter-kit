---
name: skill-creator-agent-checklist
description: Completion checklist for optional skill-creator-agent.
trigger: Use this when verifying whether skill-creator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for skill-creator-agent, but does not replace formal approval or review.
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
# skill-creator-agent Checklist

- Skill name and folder are normalized.
- Metadata is explicit enough for discovery.
- Resource decisions are captured.
- Validation references `skills/CONTRACT.md`.
