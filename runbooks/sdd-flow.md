---
name: sdd-flow
description: Operational runbook for the SDD workflow from user story refinement to PR-ready delivery.
trigger: Use this when a contributor wants high-traceability implementation flow with enforced refinement, checklist execution, and validation evidence.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the SDD operating sequence and required handoff artifacts, but does not replace canonical agent, skill, or review contracts.
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
# SDD Flow

## Goal
Run a complete SDD lifecycle from user story to PR-ready package with proof of implementation quality.

## Inputs
- User story
- Constraints and acceptance criteria
- Repository context

## Required Assets
- [agents/sdd-orchestrator-agent/AGENT.md](../agents/sdd-orchestrator-agent/AGENT.md)
- [skills/sdd-operating-flow/SKILL.md](../skills/sdd-operating-flow/SKILL.md)
- [templates/sdd-fast-forward.md](../templates/sdd-fast-forward.md)
- [checklists/sdd-delivery-ready.md](../checklists/sdd-delivery-ready.md)

## Phases
1. **Capture US**: collect goal, actor, value, constraints, and acceptance.
2. **Refine US**: convert to execution-ready requirements and scenarios.
3. **Fast-forward Package**: instantiate the prefilled package template.
4. **Apply**: execute every checklist task and record evidence.
5. **Verify + Archive**: run validations and persist evidence notes.
6. **Skill Commit**: generate standard commit + PR-ready payload.
7. **Code Review + Validation**: validate regressions and quality gates.
8. **Human Happy Path**: human confirms expected behavior quickly.

## Package Layout
Create one delivery folder per story containing:
- refined requirements and scenarios
- technical and architecture design
- execution checklist tracking
- verification evidence
- PR summary and release notes

## Done Criteria
- All checklist tasks completed.
- Validation outputs captured.
- Code review evidence captured.
- Human happy-path check recorded.
- Final handoff concise and actionable.

## Documentation Limit
Keep final delivery summary and decision log compact, targeting concise traceability and never exceeding 200 lines for the final report artifact.
