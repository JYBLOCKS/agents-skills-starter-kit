---
name: sdd-delivery-ready
description: Exhaustive SDD execution checklist for moving from refined user story to validated PR-ready delivery.
trigger: Use this when executing SDD apply and verify phases to ensure complete, auditable delivery evidence.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns SDD execution done criteria and evidence gates, but does not replace implementation details in approved specs.
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
# SDD Delivery Ready Checklist

## Discovery
- [ ] Confirm actor and value statement are explicit.
- [ ] Capture objective in one sentence.
- [ ] Capture business constraint list.
- [ ] Capture technical constraint list.
- [ ] Capture dependencies.
- [ ] Capture non-goals.
- [ ] Capture known risks.
- [ ] Capture unknowns.
- [ ] Capture impacted users.
- [ ] Capture acceptance criteria completeness.
- [ ] Capture measurable success signal.
- [ ] Capture rollback expectation.
- [ ] Capture compatibility concerns.
- [ ] Capture required environments.
- [ ] Capture data sensitivity concerns.
- [ ] Capture owner and approver.

## Spec
- [ ] Refine user story to clear intent.
- [ ] Convert criteria into testable statements.
- [ ] Define in-scope boundaries.
- [ ] Define out-of-scope boundaries.
- [ ] Define critical path scenarios.
- [ ] Define edge case scenarios.
- [ ] Define failure mode scenarios.
- [ ] Define expected outputs.
- [ ] Define expected side effects.
- [ ] Define dependency assumptions.
- [ ] Define sequencing assumptions.
- [ ] Define completion criteria.
- [ ] Define signoff criteria.
- [ ] Define observability expectations.
- [ ] Define release expectation.
- [ ] Define documentation expectation.

## Architecture
- [ ] Capture current architecture state.
- [ ] Identify affected modules.
- [ ] Identify affected interfaces.
- [ ] Identify affected contracts.
- [ ] Identify affected validations.
- [ ] Identify affected tests.
- [ ] Identify data model impacts.
- [ ] Identify migration needs.
- [ ] Identify runtime implications.
- [ ] Identify build implications.
- [ ] Identify security implications.
- [ ] Identify performance implications.
- [ ] Identify monitoring implications.
- [ ] Define mitigation plan.
- [ ] Define fallback plan.
- [ ] Define deprecation impacts.

## Tasks
- [ ] Create implementation slice list.
- [ ] Sequence slices by dependency.
- [ ] Mark parallelizable slices.
- [ ] Define done criteria per slice.
- [ ] Define owner per slice.
- [ ] Define validation per slice.
- [ ] Define evidence per slice.
- [ ] Define rollback note per slice.
- [ ] Verify task granularity is actionable.
- [ ] Verify no hidden decision remains.
- [ ] Verify interfaces are implementation-ready.
- [ ] Verify failure handling is explicit.
- [ ] Verify observability tasks are present.
- [ ] Verify docs tasks are present.
- [ ] Verify review tasks are present.
- [ ] Verify release tasks are present.

## Apply
- [ ] Start from approved refined package.
- [ ] Execute slice 1.
- [ ] Execute slice 2.
- [ ] Execute slice 3.
- [ ] Execute slice 4.
- [ ] Execute slice 5.
- [ ] Execute slice 6.
- [ ] Execute slice 7.
- [ ] Execute slice 8.
- [ ] Execute slice 9.
- [ ] Execute slice 10.
- [ ] Verify per-slice done criteria.
- [ ] Capture per-slice evidence.
- [ ] Capture implementation notes.
- [ ] Capture deviations and reasons.
- [ ] Capture unresolved risks.

## Verify
- [ ] Run structure validator commands.
- [ ] Run contract validator commands.
- [ ] Run docs validator commands.
- [ ] Run targeted regression tests.
- [ ] Run scenario validation tests.
- [ ] Confirm expected outputs.
- [ ] Confirm no unintended side effects.
- [ ] Confirm failure modes behave correctly.
- [ ] Confirm rollback path is viable.
- [ ] Confirm compatibility expectations.
- [ ] Confirm security expectations.
- [ ] Confirm performance expectations.
- [ ] Confirm observability expectations.
- [ ] Archive raw validation outputs.
- [ ] Archive summarized evidence.
- [ ] Mark verification status.

## Review
- [ ] Run code-review workflow.
- [ ] Capture review findings.
- [ ] Resolve critical findings.
- [ ] Resolve high findings.
- [ ] Resolve medium findings.
- [ ] Log accepted low risks.
- [ ] Verify no regression risk remains hidden.
- [ ] Verify tests map to acceptance criteria.
- [ ] Verify docs map to shipped behavior.
- [ ] Verify constraints are still respected.
- [ ] Verify no stale references remain.
- [ ] Verify PR summary is technically accurate.
- [ ] Verify residual risk statement exists.
- [ ] Archive review evidence.
- [ ] Record reviewer signoff status.
- [ ] Record review completion timestamp.

## Human Validation
- [ ] Prepare happy-path script.
- [ ] Execute happy-path step 1.
- [ ] Execute happy-path step 2.
- [ ] Execute happy-path step 3.
- [ ] Execute happy-path step 4.
- [ ] Execute happy-path step 5.
- [ ] Capture observed result 1.
- [ ] Capture observed result 2.
- [ ] Capture observed result 3.
- [ ] Capture observed result 4.
- [ ] Capture observed result 5.
- [ ] Confirm acceptance criteria by human.
- [ ] Capture UX notes.
- [ ] Capture discrepancies.
- [ ] Record human signoff.
- [ ] Record follow-up actions.

## Release
- [ ] Prepare standard commit message.
- [ ] Stage intended files only.
- [ ] Commit with traceable scope.
- [ ] Push branch.
- [ ] Prepare PR checklist.
- [ ] Prepare PR summary.
- [ ] Attach validation evidence links.
- [ ] Attach review evidence links.
- [ ] Attach happy-path evidence links.
- [ ] Document rollback notes.
- [ ] Document release notes.
- [ ] Verify no blocker remains.
- [ ] Confirm DoD complete.
- [ ] Mark package archived.
- [ ] Mark delivery handoff complete.
- [ ] Mark final status ready.
