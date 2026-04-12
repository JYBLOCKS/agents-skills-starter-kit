---
name: docs-sync
description: Keep README, guides, templates, and other repository docs aligned with shipped behavior and structure.
trigger: Use this when the repository structure, workflow, templates, or public-facing docs need to match current reality after a change.
metadata:
  author: starter-kit
  version: 0.2.0
  scope: Owns documentation drift detection and sync work, but does not redefine product or implementation scope.
  auto-invoke: true
allowed-tools:
  - generic
  - openai
  - claude-code
  - opencode
---

# docs-sync

## Purpose

Keep README, guides, templates, and other repository docs aligned with shipped behavior and structure.

## Use When

- The repository structure changed.
- Templates or onboarding docs no longer match actual workflows.
- A refactor introduced docs drift that would confuse contributors.

## Do Not Use When

- The task is only about code implementation with no documentation impact.
- The request is to create product copy instead of repository docs.

## Inputs

- Changed structure or behavior
- Existing docs

## Outputs

- Updated docs plan
- Drift notes
- Sync checklist

## Workflow

1. Identify documentation drift caused by structure or behavior changes.
2. Update top-level docs and navigation paths first.
3. Sync templates, guides, and supporting docs that contributors rely on.
4. Confirm the onboarding path still matches current repository reality.

## Rules

- Document current reality.
- Prefer concise onboarding paths.
- Update high-traffic docs before low-traffic supporting notes.

## Checklist

- Top-level navigation docs were checked.
- Broken or stale references were corrected.
- Template guidance matches the current contract.
- Optional modules are clearly labeled as optional.

## Non-Negotiable Rules

- Do not leave public-facing docs describing removed or relocated assets.
- Do not preserve stale workflows just because they existed before.
- Do not expand documentation scope beyond what the shipped reality requires.

## References

- `README.md`
- `AGENTS.md`
- `templates/`
- `runbooks/`

## Examples

### Example Trigger

The starter was simplified and the docs need to match the new minimal flow.

### Example Output Shape

List the docs that need updates, summarize the drift, and align the main navigation path with the new structure.
