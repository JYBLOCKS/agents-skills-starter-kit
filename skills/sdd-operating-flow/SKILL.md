---
name: sdd-operating-flow
type: skill
description: End-to-end SDD workflow for converting a user story into a validated implementation and PR-ready handoff.
version: 1.0.0
status: active
---
# SDD Operating Flow

## Purpose
Provide a repeatable execution flow that enforces quality, traceability, and concise outputs from user story to PR-ready delivery.

## When To Use
- You need full-lifecycle delivery, not one-off coding.
- You need explicit verification, code review, and human happy-path evidence.
- You want deterministic execution with a detailed checklist and fast-forward package.

## Rules
- Start with a user story.
- Refine before implementation.
- Create fast-forward package before apply.
- Execute all checklist tasks in [checklists/sdd-delivery-ready.md](../../checklists/sdd-delivery-ready.md).
- Use [skills/caveman/SKILL.md](../../skills/caveman/SKILL.md) for concise executive outputs and handoffs.
- Use [skills/frontend-design/SKILL.md](../../skills/frontend-design/SKILL.md) before frontend implementation when visual direction is not settled.
- Use [skills/frontend-developer/SKILL.md](../../skills/frontend-developer/SKILL.md) for frontend implementation after design is settled.
- Keep final delivery summary concise and actionable.

## Workflow
1. Capture user story and acceptance criteria.
2. Refine user story into execution-ready contract.
3. Create fast-forward package from [templates/sdd-fast-forward.md](../../templates/sdd-fast-forward.md).
4. Apply skill gates: `caveman` always for executive output; `frontend-design` before frontend implementation when needed; `frontend-developer` after design definition.
5. Apply all tasks from [checklists/sdd-delivery-ready.md](../../checklists/sdd-delivery-ready.md).
6. Verify implementation and archive evidence in the package.
7. Produce skill commit output with commit message and PR checklist.
8. Run code-review validation and regression checks.
9. Record human happy-path validation result.

## Output Format
- Refined user story
- Package path and completion status
- Checklist completion evidence
- Validation outputs
- Commit payload
- PR-ready summary
- Human signoff note

## Constraints
- Do not mark done if checklist coverage is partial.
- Do not bypass verification or code review.
- Do not omit evidence links in final handoff.
