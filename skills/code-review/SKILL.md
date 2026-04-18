---
name: code-review
description: Review changes for regressions, contract mismatches, quality gaps, and missing validation evidence
trigger: Use this when implementation work is ready for review and the priority is finding bugs, risks, regressions, or missing evidence rather than praising the change
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the code-review workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection
  auto-invoke: true
tools: shared/tool-permissions.md#standard-tool-set
---
# code-review
## Purpose

Review changes for regressions, contract mismatches, quality gaps, and missing evidence.
## Use When

- An implementation handoff is ready for review.
- A risky change needs focused regression analysis.
- The repo needs findings ordered by severity.
## Do Not Use When

- The task is still in early scoping or spec drafting.
- The request is to implement or refactor code rather than review it.
## Inputs

- Change set
- Governing spec
- Validation evidence
## Outputs

- Findings by severity
- Residual risk summary
- Missing validation notes
## Workflow

1. Compare the change set against the approved spec and stated scope.
2. Inspect for broken behavior, missing tests, rule violations, or contract drift.
3. Prioritize findings by severity and confidence.
4. Summarize residual risks and validation gaps that remain.
## Rules

- Lead with issues, not praise.
- Anchor findings to files, behavior, or contracts.
- Prefer concrete, testable statements over vague quality language.
## Checklist

- The approved scope was checked.
- Findings are prioritized.
- Evidence gaps are called out.
- Residual risk is summarized.
## Non-Negotiable Rules

- Do not bury critical findings under summary text.
- Do not approve behavior that conflicts with the governing spec.
- Do not treat missing validation as a minor detail when risk is material.
## References

- `rules/global-rules.md`
- `rules/agent-rules.md`
- `checklists/review-ready.md`
## Examples

### Example Trigger

Review this implementation for regressions, contract mismatches, and missing tests.
### Example Output Shape

Produce findings ordered by severity with references to files or behaviors, then summarize residual risk and missing validation.
