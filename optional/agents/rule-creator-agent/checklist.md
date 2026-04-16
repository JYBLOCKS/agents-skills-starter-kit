---
name: rule-creator-agent-checklist
description: Completion checklist for optional rule-creator-agent.
trigger: Use this when verifying whether rule-creator-agent has met its completion gates.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for rule-creator-agent, but does not replace formal approval or review.
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
# rule-creator-agent Checklist

- Rule document target is normalized.
- Audience and scope are explicit.
- Precedence is documented when needed.
- Validation references the rule questionnaire and existing rule docs.
