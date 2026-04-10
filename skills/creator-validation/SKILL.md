# creator-validation

## Purpose

Run the final creator phase: validate draft outputs against the target contract and confirm the final creation package is complete.

## Supported Tools

- generic
- openai
- claude-code
- opencode
- cursor
- windsurf
- aider

## Inputs

- creation package draft
- target artifact contract
- questionnaire validation checks

## Outputs

- validation checklist
- missing fields
- dependency follow-ups

## Guardrails

- Validate against the current repo contract, not memory.
- Report missing fields explicitly.
- Keep follow-up notes limited to real dependencies.

## Process

1. Compare the draft package to `creators/CREATION-PACKAGE-CONTRACT.md`.
2. Compare the drafted artifact to its governing contract.
3. Produce a concise validation checklist.

## Adapter Notes

- generic: use this before returning the final creator output.
