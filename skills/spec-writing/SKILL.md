---
name: spec-writing
description: Produce implementation-ready specs from approved intent, repository context, and known constraints.
trigger: Use this when business intent has been clarified and the next step is to create a decision-complete spec that implementers can follow safely.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the spec-writing workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
  auto-invoke: true
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
# spec-writing

## Purpose

Produce implementation-ready specs from approved intent and known repository constraints.

## Use When

- Business intent is approved and needs a technical spec.
- Existing specs are incomplete, outdated, or too vague to implement safely.
- A team needs interfaces, constraints, and validation captured in one place.

## Do Not Use When

- The request is still missing key business decisions.
- The task is already in active implementation and only needs a small local note.

## Inputs

- Approved intent
- Shared context
- Existing contracts and repository constraints

## Outputs

- Spec draft
- Assumptions list
- Test and validation plan

## Workflow

1. Frame the problem, goals, and scope boundary.
2. Record the decisions, interfaces, dependencies, and constraints that implementers need.
3. Separate approved decisions from assumptions or open risks.
4. Add validation steps and acceptance criteria that match the requested change.

## Rules

- Separate decisions from assumptions.
- Keep acceptance criteria testable.
- Prefer behavior-level clarity over vague architectural prose.

## Checklist

- Problem and goals are explicit.
- Interfaces and constraints are documented.
- Assumptions are separated from decisions.
- Validation plan and acceptance criteria are present.

## Non-Negotiable Rules

- Do not leave decision-critical ambiguity inside the spec.
- Do not present assumptions as approved decisions.
- Do not skip validation planning for changes that affect behavior.

## References

- `specs/CONTRACT.md`
- `context/`
- `rules/global-rules.md`

## Examples

### Example Trigger

Write the implementation-ready spec for the new approval workflow using the approved product intent and current repo context.

### Example Output Shape

Produce a spec with goals, scope, interfaces, constraints, assumptions, and a concrete test and validation plan.
