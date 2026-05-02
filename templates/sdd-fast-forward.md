---
name: sdd-fast-forward
description: Prefilled delivery package template for running the SDD flow with requirements, design, execution evidence, and PR handoff.
trigger: Use this when creating the fast-forward package before running apply tasks in the SDD flow.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the structure of the SDD fast-forward package, but does not replace implementation or review contracts.
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
# SDD Fast-Forward Package

## Story Metadata
- Story ID:
- Title:
- Owner:
- Date:
- Target Branch:

## Refined Requirements and Scenarios
- Goal:
- In scope:
- Out of scope:
- Constraints:
- Acceptance criteria:
- Primary scenarios:
- Edge scenarios:

## Technical and Architecture Design
- Current state summary:
- Proposed changes:
- Interfaces and contracts:
- Data and state impacts:
- Risks and mitigations:

## Execution Checklist Tracking
Reference [checklists/sdd-delivery-ready.md](../checklists/sdd-delivery-ready.md) and log completion evidence per block.

## Verification and Archive Evidence
- Validation commands and outputs:
- Code review findings and resolutions:
- Human happy-path notes:
- Residual risks:

## PR Summary
- Commit message:
- Change summary:
- Test evidence:
- Rollback notes:
- Release notes:
