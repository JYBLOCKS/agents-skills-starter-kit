---
name: agents-guide
description: Single canonical operating guide for orchestrator-led SDD delivery.
trigger: Use this as the primary operating contract before starting work in the starter kit.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Defines one public workflow entrypoint and strict routing rules for this repository.
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
# AGENTS Guide

## Single Public Flow

This repository exposes exactly one public workflow entrypoint:

1. Start in [agents/orchestrator.md](agents/orchestrator.md)
2. Run orchestrator-led discovery and context checks
3. Create or update spec before implementation
4. Delegate execution internally to specialist agents
5. Validate results
6. Return caveman summary

No other agent or runbook is a public entrypoint.

## Operating Rules

- Orchestrator is the only public route for delivery and extension work.
- Specialist agents are internal delegates only.
- Creator capabilities are internal and reached only through orchestrator delegation.
- SDD is mandatory before implementation.
- TDD and validation evidence are mandatory before completion.
- Caveman mode is mandatory for concise progress and final operational summaries.

## Orchestrator Responsibilities

- Ask only critical missing questions after checking existing context.
- Define or update the active spec.
- Select the minimal internal delegation set.
- Enforce SDD, TDD, quality gates, and scope control.
- Consolidate outputs into one final response path.

## Internal Delegation Map

These are internal delegates, not public routes:

- Product and discovery: `product-manager.md`, `business-strategist.md`
- Architecture and engineering: `software-architect.md`, `frontend-senior.md`, `backend-senior.md`, `database-engineer.md`
- Quality and safety: `qa-engineer.md`, `security-engineer.md`, `code-reviewer.md`
- Operations and docs: `devops-engineer.md`, `documentation-writer.md`
- Creator system: creator agents under `agents/*.md`

## Canonical References

- Public entry agent: [agents/orchestrator.md](agents/orchestrator.md)
- Operational runbook: [runbooks/sdd-flow.md](runbooks/sdd-flow.md)
- Spec contract: [specs/CONTRACT.md](specs/CONTRACT.md)
- Validation checklist: [checklists/sdd-delivery-ready.md](checklists/sdd-delivery-ready.md)

## Non-Negotiable

- Do not publish alternate workflow entrypoints in docs.
- Do not document legacy or secondary paths.
- Do not instruct users to begin from specialist agents directly.
