---
name: repo-analysis
description: Inspect a repository and summarize structure, patterns, risks, and likely change surfaces before planning or implementation.
trigger: Use this when work needs grounding in the current repository before making decisions, writing a spec, routing work, or implementing changes.
metadata:
  author: starter-kit
  version: 0.2.0
  scope: Owns repository grounding and change-surface discovery, but does not own implementation decisions.
  auto-invoke: true
allowed-tools:
  - generic
  - openai
  - claude-code
  - opencode
---

# repo-analysis

## Purpose

Inspect a repository and summarize the current structure, important patterns, risks, and likely change surfaces before planning or implementation.

## Use When

- A task starts with limited repository context.
- A spec needs to reflect current implementation reality.
- An orchestrator needs to route work based on real repo structure.
- A change looks risky and needs better grounding first.

## Do Not Use When

- The repository structure is already understood and the task is a tiny local edit.
- The request is purely business-facing and does not depend on repository facts.

## Inputs

- Target repository or workspace
- User request or mission

## Outputs

- Repository summary
- Candidate entry points
- Risk notes
- Suggested files or folders to inspect next

## Workflow

1. Inspect the root structure and the most relevant docs or contracts.
2. Identify naming, ownership, workflow, and implementation clues that matter to the task.
3. Separate observed facts from inferred patterns or risks.
4. Summarize the parts of the repo that should guide the next step.

## Rules

- Prefer observation over assumption.
- Keep the summary tied to the active task.
- Flag uncertainty when repository signals conflict.

## Checklist

- Root structure and relevant docs were inspected.
- Likely entry points were identified.
- Risks or unknowns were made explicit.
- Facts and inferences were separated.

## Non-Negotiable Rules

- Do not propose implementation before grounding in the current repo.
- Do not present guesses as discovered repository facts.
- Do not ignore existing contracts, patterns, or folder conventions.

## References

- `context/repo-context.md`
- `rules/global-rules.md`
- `rules/skill-rules.md`

## Examples

### Example Trigger

Analyze this repository before we decide where to add the new approval workflow.

### Example Output Shape

Summarize the relevant folders, likely entry points, repository conventions, and the files worth reading next.
