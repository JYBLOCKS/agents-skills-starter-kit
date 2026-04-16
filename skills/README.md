---
name: skills
description: Catalog and structure overview for the starter kit skills.
trigger: Use this when README is the relevant repository document for the task.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repository guidance for README, but does not replace the source artifacts it describes.
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
- Creator extensions: `creators/SKILL-CONTRACT.md`

## Starter Skills

The minimal starter path keeps these skills front and center:

- `caveman`
- `repo-analysis`
- `requirements-extraction`
- `spec-writing`
- `task-breakdown`
- `code-review`
- `test-planning`
- `docs-sync`

`caveman` is also the token-efficiency baseline and should be treated as a first-class exported skill.

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

All skills are authored directly under `skills/`.
Creator-oriented skills and delivery-oriented skills follow the same repository contract.
