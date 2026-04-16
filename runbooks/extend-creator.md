---
name: extend-creator
description: Creator workflow for Extend Creator.
trigger: Use this when you need the repeatable workflow documented in Extend Creator.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for Extend Creator, but does not replace underlying contracts or repository rules.
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
# Extend A Creator

1. Identify the creator agent and creator skill that own the artifact family.
2. Update the relevant questionnaire under `creators/questionnaires/` if the interview fields changed.
3. Update the creator skill's required questions, mapping rules, and validation logic.
4. Update the creator agent's prompt, rules, and example so the three-phase flow still matches.
5. Update README, templates, or adapter docs if the creator output shape changed.
6. Verify the final creator still produces a complete creation package.
