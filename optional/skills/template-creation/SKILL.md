# template-creation

## Purpose

Guide the creation of reusable templates with meaningful placeholders, safe defaults, and clear contract coverage.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- template request
- `optional/creators/questionnaires/template.yaml`
- `templates/README.md`

## Outputs

- template creation package
- drafted template file or package
- validation checklist

## Guardrails

- Ask for the target artifact type first.
- Prefer safe defaults over clever ones.
- Make placeholders easy to identify and replace.

## Process

1. Run intake and normalize the template target path.
2. Collect required sections, placeholders, and default choices.
3. Draft the template and validate it.

## Adapter Notes

- generic: tie the template to the governing contract when one exists.
