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
