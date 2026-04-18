---
name: task-breakdown
description: Break an approved spec into ordered implementation tasks with dependencies, sequencing logic, and done criteria
trigger: Use this when a spec is approved and the team needs coherent implementation slices, routing guidance, or safer sequencing before execution starts
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the task-breakdown workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection
  auto-invoke: true
tools: shared/tool-permissions.md#standard-tool-set
---
# task-breakdown
## Purpose

Break an approved spec into ordered implementation tasks with dependencies and done criteria.
## Use When

- A spec is approved and work needs sequencing.
- An orchestrator needs clearer execution slices.
- A change is large enough that hidden dependencies could cause churn.
## Do Not Use When

- The task is a tiny single-step change with no dependency chain.
- The spec itself is still incomplete or unapproved.
## Inputs

- Approved spec
- Current repository state
## Outputs

- Task list
- Ordering rationale
- Dependency notes
## Workflow

1. Identify the main workstreams implied by the approved spec.
2. Sequence dependencies and determine what can run in parallel.
3. Attach done criteria and handoff notes to each execution slice.
4. Call out blockers, prerequisite decisions, or risky coupling.
## Rules

- Keep tasks outcome-oriented.
- Prefer the smallest coherent execution slices.
- Make dependency ordering explicit instead of implied.
## Checklist

- Workstreams are clear.
- Dependencies are ordered.
- Done criteria exist for each slice.
- Risks or blockers are visible.
## Non-Negotiable Rules

- Do not redefine approved scope while breaking down work.
- Do not hide prerequisites that can block downstream execution.
- Do not create task lists that are too vague to hand off safely.
## References

- `specs/`
- `context/repo-context.md`
- `rules/global-rules.md`
## Examples

### Example Trigger

Break this approved spec into implementation slices with dependencies and done criteria.
### Example Output Shape

Produce an ordered task list with sequencing notes, dependencies, and explicit completion criteria per slice.
