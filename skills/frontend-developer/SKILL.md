---
name: frontend-developer
description: implement or refine production frontend code with maintainable structure, responsive behavior, accessibility coverage, and clear alignment to the intended user experience.
trigger: Use this when the task requires writing, changing, or validating real frontend code for components, pages, interactions, styling, or UI behavior.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the frontend-developer workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# frontend-developer

## Purpose

Build and improve frontend code that is production-ready, understandable, and consistent with the product's intended experience.

This skill focuses on implementation quality: translating specs, repository patterns, and design guidance into reliable UI code without unnecessary complexity.

## Use When

- The task requires creating or modifying frontend components, pages, or styles.
- A feature needs responsive behavior, state handling, accessibility fixes, or interaction polish.
- Existing frontend code needs cleanup to become more maintainable or scalable.
- Design direction already exists and needs implementation in code.

## Do Not Use When

- The task is purely about visual exploration or interface direction.
- The request is backend-only or infrastructure-only.
- The work is limited to product scoping, design critique, or release note writing.
- The codebase needs review findings more than implementation.

## Inputs

- User request or approved spec
- Current repository structure and existing frontend patterns
- Existing design system or direction from `frontend-design`
- Framework, styling, and state-management constraints
- Acceptance criteria, validation needs, and browser/device expectations

## Outputs

- Implementation plan aligned to the current codebase
- Production-ready frontend code changes
- Validation notes for responsive behavior, accessibility, and edge states
- Clear notes on risks, constraints, or follow-up work

## Workflow

1. Inspect the existing repo structure, UI patterns, and framework conventions before writing code.
2. Identify the smallest coherent change that satisfies the request without drifting scope.
3. Implement the UI behavior, states, and styling in a way that matches existing architecture and design direction.
4. Validate loading, empty, error, keyboard, mobile, and desktop behavior where relevant.
5. Summarize the change and any residual risks or missing coverage.

## Rules

- Follow existing repository conventions before introducing a new pattern.
- Keep components and styling maintainable instead of overly clever.
- Implement all relevant user-visible states, not just the happy path.
- Preserve accessibility and responsive behavior as core requirements.
- If visual direction is still undefined, hand the decision back to `frontend-design` instead of guessing a brand-new design language.

## Checklist

- Loading, empty, error, and success states are handled where relevant.
- The UI works on desktop and mobile breakpoints required by the task.
- Keyboard, semantic, and accessibility concerns are addressed.
- New code fits the structure and conventions of the repo.
- Styling and interaction logic are not unnecessarily coupled or duplicated.
- Validation notes mention any remaining risks or missing tests.

## Non-Negotiable Rules

- Do not invent a new visual language when the task needs design direction first.
- Do not ignore repository conventions just to make the local change faster.
- Do not skip edge states, accessibility, or responsive behavior when they materially affect the result.
- Do not expand scope beyond the approved implementation target.

## References

- Use the active spec, repository context, and existing frontend patterns as the primary source of truth.
- When the experience still needs visual direction, use `frontend-design` before implementation.

## Examples

### Example Trigger

Implement the new dashboard filter panel in React, keeping it responsive, keyboard-friendly, and consistent with the existing component system.

### Example Output Shape

Inspect the current frontend structure, modify the relevant components and styles, account for empty and loading states, and report the validation performed.
