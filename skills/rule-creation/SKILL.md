---
name: rule-creation
description: guide and workflow for rule-creation.
trigger: Use this when rule-creation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the rule-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# rule-creation

## Purpose

Guide the creation of a new rule document or rule set with explicit audience, scope, enforcement, exclusions, and precedence.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- rule request
- `creators/questionnaires/rule.yaml`
- `rules/README.md`

## Outputs

- rule creation package
- drafted rule content
- validation checklist

## Guardrails

- Ask about precedence only when conflicts may exist.
- Keep rules concrete and behaviorally testable.
- Make the target audience explicit.

## Process

1. Run intake and normalize the target rule path.
2. Gather required and conditional rule questions.
3. Draft the package and validate it.

## Adapter Notes

- generic: do not hide rule conflicts behind vague wording.
