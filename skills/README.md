# Skills

Skills are portable capability bundles that agents can invoke across tools.

## Canonical Package Contents

- `SKILL.md`: the canonical skill contract, trigger guidance, workflow, checklist, references, and examples
- optional `assets/`
- optional `scripts/`

## Shared Contracts

- Global rules: `rules/global-rules.md`
- Skill rules: `rules/skill-rules.md`
- Skill template: `templates/skill/`
- Optional creator extensions: `optional/creators/SKILL-CONTRACT.md`

## Core Skills

The minimal starter path keeps these skills front and center:

- `repo-analysis`
- `requirements-extraction`
- `spec-writing`
- `task-breakdown`
- `code-review`
- `test-planning`
- `docs-sync`

## Required Structure

Each `SKILL.md` should start with a structured metadata block and then define:

- `Purpose`
- `Use When`
- `Do Not Use When`
- `Inputs`
- `Outputs`
- `Workflow`
- `Rules`
- `Checklist`
- `Non-Negotiable Rules`
- `References`
- `Examples`

Keep examples inline inside `SKILL.md` when they materially improve usage clarity.

Optional creator skills live under `optional/skills/`.
