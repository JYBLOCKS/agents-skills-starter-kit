---
name: skill-creation
description: create or update a repository skill using the single-file SKILL.md contract and only the supporting assets the skill truly needs.
trigger: Use this when the user wants to create or update a skill package, especially when they need help defining triggers, scope, workflow, rules, checklist, or supporting references.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the skill-creation workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
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
# skill-creation

## Purpose

Guide the full creation of a new skill package using a single `SKILL.md` file as the source of truth.

## Use When

- A user wants a new reusable skill.
- An existing skill needs a clearer trigger, workflow, or checklist.
- The repository needs a skill written to the current starter format.

## Do Not Use When

- The user only needs a one-off prompt and not a reusable skill.
- The request is really for an agent, rule, spec, or runbook instead of a skill.
- The existing skill only needs a tiny wording fix with no contract impact.

## Inputs

- Skill request
- `creators/questionnaires/skill.yaml`
- `skills/CONTRACT.md`
- `templates/skill/`

## Outputs

- A complete `SKILL.md` draft
- Notes on optional `assets/` or `scripts/` only when justified
- Validation notes against the skill contract

## Workflow

1. Normalize the skill name and clarify the job the skill must do.
2. Gather the trigger, scope, inputs, outputs, workflow, rules, and checklist details that materially affect the draft.
3. Draft `SKILL.md` and validate that the required metadata block and sections are present.

## Rules

- Normalize the folder to `skills/<skill-name>/`.
- Ask about references, assets, and scripts only when relevant.
- Keep the output concise, discoverable, and easy to reuse.

## Checklist

- `SKILL.md` includes the required metadata block.
- Trigger and scope are explicit.
- Workflow, rules, and checklist are concrete.
- Non-negotiable rules are present.
- References only point to files that matter.

## Non-Negotiable Rules

- Do not split required skill metadata into `metadata.yaml`.
- Do not create `examples/` folders for the skill package.
- Keep the reusable contract in `SKILL.md` and only add sidecar files when they provide real value.

## References

- `creators/questionnaires/skill.yaml`
- `skills/CONTRACT.md`
- `templates/skill/SKILL.md`

## Examples

### Example Request

Create a skill that helps prepare changelog drafts from merged work.

### Example Output Shape

Draft `skills/changelog-prep/SKILL.md` with a clear trigger, checklist, non-negotiable rules, and any needed references.
