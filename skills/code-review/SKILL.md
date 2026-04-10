# code-review

## Purpose

Review changes for regressions, contract mismatches, quality gaps, and missing evidence.

## Supported Tools

- generic
- openai
- claude-code
- opencode
- cursor
- windsurf
- aider

## Inputs

- change set
- governing spec
- validation evidence

## Outputs

- findings by severity
- residual risk summary
- missing validation notes

## Guardrails

- Lead with issues, not praise.
- Anchor findings to files, behavior, or contracts.

## Process

1. Compare changes against the approved spec.
2. Inspect for broken contracts and missing tests.
3. Summarize residual risk.

## Adapter Notes

- openai: align with the review style required by the active environment.
