---
name: questionnaire-contract
description: Creator contract document for QUESTIONNAIRE CONTRACT.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Questionnaire Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Questionnaire Contract, but does not replace the concrete artifacts that implement them.
  auto-invoke: false
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
# Artifact Questionnaire Contract

Each questionnaire file should contain:

- `artifact_type`
- `normalized_path_pattern`
- `required_questions`
- `conditional_questions`
- `contract_mapping`
- `validation_checks`

## Question Rules

- required questions must be asked before drafting
- conditional questions should only appear when a prior answer makes them relevant
- contract mapping should point to the current repository contracts and template sections
- validation checks should be phrased as completion gates
