---
name: frontend-design
description: Define intentional frontend visual direction, layout decisions, and UI system guidance for product work that needs stronger design quality than a generic default.
trigger: Use this when the task is primarily about UI direction, layout, visual language, interaction style, or translating product intent into a coherent frontend design approach.
metadata:
  author: starter-kit
  version: 0.1.0
  scope: Owns design direction and UI decision-making for frontend work, but does not own production implementation.
  auto-invoke: false
allowed-tools:
  - generic
  - openai
  - claude-code
  - opencode
---

# frontend-design

## Purpose

Shape frontend experiences that feel intentional, distinctive, and ready for implementation.

This skill turns product intent into concrete UI direction by defining layout, typography, color, motion, and interaction guidance without drifting into generic design advice or code-review behavior.

## Use When

- The user wants help designing a new page, feature, dashboard, or landing experience.
- A frontend needs a stronger visual direction before implementation starts.
- Existing UI feels generic, weak, or visually inconsistent and needs a clearer design system.
- The team needs implementation-ready design guidance without a full design tool workflow.

## Do Not Use When

- The task is primarily to write or refactor production frontend code.
- The request is about backend, infrastructure, or API design.
- The task is code review, bug triage, or regression analysis.
- The UI already has a locked design system and only needs straightforward implementation.

## Inputs

- Product or feature brief
- User goals and audience context
- Existing repository, screens, or design system if available
- Brand constraints, content constraints, and accessibility expectations
- Technical constraints that affect the design direction

## Outputs

- Clear design direction summary
- Layout and composition guidance
- Typography, color, and motion decisions
- UI system recommendations that are realistic to implement
- Validation notes covering accessibility, responsiveness, and consistency risks

## Workflow

1. Read the product context, current UI constraints, and any existing design system.
2. Identify what the interface must communicate, what makes it distinct, and what must stay consistent.
3. Propose a visual direction that covers layout, typography, color, motion, and component behavior.
4. Stress-test the direction against responsiveness, accessibility, content density, and implementation realism.
5. Deliver guidance that a frontend developer can implement without guessing the intended experience.

## Rules

- Prefer a clear visual point of view over a safe but generic layout.
- Preserve the established design system when one already exists.
- Tie visual choices to product intent, audience, and content, not aesthetics alone.
- Keep motion purposeful and lightweight instead of decorative noise.
- Separate discovered constraints from design recommendations.

## Checklist

- The layout hierarchy is obvious on desktop and mobile.
- Typography choices feel intentional and readable.
- Colors and backgrounds support the product tone without reducing clarity.
- Motion, if used, enhances comprehension or delight without harming usability.
- Components and patterns feel consistent enough to scale.
- Accessibility and responsive risks are called out.

## Non-Negotiable Rules

- Do not default to generic UI patterns when the request calls for a stronger design point of view.
- Do not override an existing design system without a clear reason.
- Do not confuse design guidance with implementation, code review, or bug triage.
- Do not invent brand constraints, user needs, or technical limitations that were not provided or observed.

## References

- Use repository context, existing screens, or design system files when they exist.
- Hand implementation follow-up to `frontend-developer` once the design direction is settled.

## Examples

### Example Trigger

Design the marketing site for our AI workflow product so it feels premium, fast, and different from generic SaaS landing pages.

### Example Output Shape

Provide a visual direction, suggested layout structure, typography pairings, color strategy, motion guidance, and the implementation cues a frontend developer should follow.
