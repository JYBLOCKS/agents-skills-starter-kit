---
name: creator-validation
description: guide and workflow for creator-validation
trigger: Use this when creator-validation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the creator-validation workflow and expected outputs; complements broader repository rules and agent selection
  auto-invoke: true
tools: shared/tool-permissions.md#standard-tool-set
---
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
