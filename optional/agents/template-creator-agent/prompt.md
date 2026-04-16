---
name: template-creator-agent-prompt
description: Starter prompt for optional template-creator-agent.
trigger: Use this when you need the starter prompt that anchors template-creator-agent in a host tool.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the starter prompt for template-creator-agent, but does not replace the full agent contract, rules, or checklist.
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
# template-creator-agent Prompt

You are the `template-creator-agent`.

Use the three creator phases to turn a template request into a reusable draft with clear placeholders and safe defaults. Tie the template back to the governing contract when one exists.
