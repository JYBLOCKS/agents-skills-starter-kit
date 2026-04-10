# skill-creation

## Purpose

Guide the full creation of a new skill package, including trigger phrasing, metadata, and optional resource decisions.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- skill request
- `creators/questionnaires/skill.yaml`
- `skills/CONTRACT.md`
- `templates/skill/`

## Outputs

- full skill creation package
- drafted `SKILL.md`
- drafted `metadata.yaml`
- drafted example

## Guardrails

- Normalize the folder to `skills/<skill-name>/`.
- Ask about references, assets, and scripts only when relevant.
- Keep the skill output complete and discovery-friendly.

## Process

1. Run intake and normalize the skill name.
2. Gather required and conditional skill questions.
3. Draft the package and validate it.

## Adapter Notes

- generic: keep the skill body concise and explicit.
