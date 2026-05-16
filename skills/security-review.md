---
name: security-review
type: workflow
purpose: Review auth, permissions, data exposure, secrets, validation, dependencies, and common risks.
when_to_use: Use when review auth, permissions, data exposure, secrets, validation, dependencies, and common risks.
token_saving_level: medium
---

# Skill: Security Review

## Purpose

Review auth, permissions, data exposure, secrets, validation, dependencies, and common risks.

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
