---
name: sdd-operating-flow
type: workflow
purpose: Provide reusable sdd operating flow workflow guidance for the starter kit.
when_to_use: Use when provide reusable sdd operating flow workflow guidance for the starter kit.
token_saving_level: medium
---

# Skill: SDD Operating Flow

## Purpose

Provide reusable sdd operating flow workflow guidance for the starter kit.

## Use When

- The current task needs this reusable capability.
- The agent needs consistent process and output quality.
- The work benefits from compact repeatable guidance.

## Rules

- Start from the active spec and context.
- Keep outputs concise and implementation-ready.
- Separate decisions, assumptions, risks, and validation.

## Process

1. Confirm the relevant goal and constraints.
2. Apply the smallest useful workflow for this skill.
3. Produce the required output and quality evidence.

## Output Format

- Result:
- Decisions:
- Risks:
- Tests or validation:
- Next:

## Quality Gates

Inherits shared gate policy from [skills/CONTRACT.md](./CONTRACT.md) and canonical workflow constraints in [AGENTS.md](../AGENTS.md).

## Required SDD Links

- Checklist: [checklists/sdd-delivery-ready.md](../checklists/sdd-delivery-ready.md)
- Fast-forward template: [templates/sdd-fast-forward.md](../templates/sdd-fast-forward.md)
- Caveman output gate: [skills/caveman.md](caveman.md)
- Frontend design gate: [skills/frontend-design.md](frontend-design.md)
- Frontend developer gate: [skills/frontend-developer.md](frontend-developer.md)
- TDD gate: [skills/test-driven-development.md](test-driven-development.md)
