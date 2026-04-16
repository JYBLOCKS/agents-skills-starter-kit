---
name: skill-contract
description: Creator contract document for SKILL CONTRACT.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Skill Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Skill Contract, but does not replace the concrete artifacts that implement them.
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
# Creator Skill Contract

Creator skills extend the base skill contract with:

- required questions
- conditional questions
- naming rules
- contract mapping rules
- minimum acceptable output
- validation checks against the target artifact contract

Each creator skill should reference:

- one questionnaire from `optional/creators/questionnaires/`
- one or more existing repository contracts
- the creation package contract
