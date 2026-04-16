---
name: specs-contract
description: Canonical contract for specs in the starter kit.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Specs Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Specs Contract, but does not replace the concrete artifacts that implement them.
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
# Spec Contract

Every spec should include:

## Required Sections

- Problem
- Goals
- Non-Goals
- Constraints
- Decisions
- Interfaces or Outputs
- Acceptance Criteria
- Test or Validation Plan

## Optional Sections

- Rollout
- Migration
- Open Questions
- Risks
