---
name: requirements-extraction
description: Convert raw requests into explicit goals, non-goals, constraints, priorities, and acceptance language before implementation planning begins
trigger: Use this when a request is under-specified, mixes goals with solutions, or needs clearer business framing before a spec or implementation plan can be trusted
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the requirements-extraction workflow and expected outputs; complements broader repository rules and agent selection
  auto-invoke: true
tools: shared/tool-permissions.md#standard-tool-set
---
# requirements-extraction
## Purpose

Convert user requests into goals, non-goals, constraints, priorities, and acceptance language.
## Use When

- The user request is ambiguous or incomplete.
- Business intent needs to be separated from implementation detail.
- Scope boundaries and priorities are still fuzzy.
- A spec needs cleaner acceptance language.
## Do Not Use When

- The business requirements are already approved and the next step is implementation.
- The task is only about reviewing code or syncing docs.
## Inputs

- Raw request
- Known business or product context
## Outputs

- Requirements summary
- Open questions or unresolved dependencies
- Acceptance draft
## Workflow

1. Extract user outcomes, value, and scope from the raw request.
2. Separate must-haves, nice-to-haves, and explicit non-goals.
3. Record constraints, priorities, and unresolved questions.
4. Frame acceptance criteria in plain language that can feed a spec.
## Rules

- Keep business intent separate from implementation detail.
- Make scope boundaries explicit.
- Prefer plain language over abstract product jargon.
## Checklist

- Goals and non-goals are explicit.
- Constraints and priorities are listed.
- Acceptance language is understandable and testable.
- Open questions are called out instead of hidden.
## Non-Negotiable Rules

- Do not collapse business goals into implementation choices too early.
- Do not hide missing decisions behind vague wording.
- Do not skip scope boundaries when they materially affect the work.
## References

- `context/business-context.md`
- `context/product-context.md`
- `rules/global-rules.md`
## Examples

### Example Trigger

Turn this rough request into goals, scope, and acceptance criteria before we write the spec.
### Example Output Shape

Produce a requirements summary with goals, non-goals, constraints, priorities, open questions, and an acceptance draft.
