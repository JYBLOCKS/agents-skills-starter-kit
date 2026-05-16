---
name: agent-system-spec
description: Flat agent and skills operating system spec.
---
# Agent System Spec

## Problem
The starter kit needs one clear operating system where a user can talk to an orchestrator and receive software-company style delivery without excess token cost or unclear ownership.

## Goals
- Make `agents/*.md` and `skills/*.md` the canonical flat contract.
- Require SDD before implementation and TDD during delivery.
- Route product, business, finance, growth, design, architecture, frontend, backend, database, DevOps, QA, security, review, and documentation work to the right agent.
- Keep executive updates in caveman mode.
- Preserve existing creator and core repository capabilities after migration.

## Non-Goals
- Restoring missing adapter packages.
- Implementing product application code.
- Creating per-agent or per-skill folders.

## Users
- Primary: repository owner using Codex or Claude through the orchestrator.
- Secondary: AI agents that need clear contracts, routing, and validation gates.

## Orchestrator Flow
1. Inspect existing context before asking questions.
2. Ask only critical missing discovery questions, with a maximum of ten initial questions.
3. Create or update the active spec in `specs/`.
4. Build or update context in `context/`.
5. Route to the smallest correct set of agents.
6. Require TDD and test evidence before completion.
7. Consolidate results and answer in caveman mode unless detail is requested.

## Agents
- orchestrator
- product-manager
- business-strategist
- finance-strategist
- marketing-growth
- ux-ui-designer
- software-architect
- frontend-senior
- backend-senior
- database-engineer
- devops-engineer
- qa-engineer
- security-engineer
- tech-lead
- code-reviewer
- documentation-writer
- Existing core and creator agents migrated to flat files.

## Skills
- caveman
- spec-driven-development
- test-driven-development
- context-builder
- requirements-discovery
- delegation-router
- product-strategy
- business-modeling
- finance-analysis
- marketing-strategy
- ux-research
- ui-design-system
- frontend-architecture
- backend-architecture
- database-design
- api-design
- devops-ci-cd
- security-review
- observability
- testing-strategy
- code-review
- documentation
- release-management
- Existing core and creator skills migrated to flat files.

## Routing Matrix
| Need | Agent |
| --- | --- |
| Vague idea | product-manager |
| Business strategy | business-strategist |
| Pricing or costs | finance-strategist |
| Growth or acquisition | marketing-growth |
| UX or flows | ux-ui-designer |
| Architecture | software-architect |
| React or UI | frontend-senior |
| API or backend logic | backend-senior |
| Database or schema | database-engineer |
| CI, Docker, or deploy | devops-engineer |
| Tests | qa-engineer |
| Security | security-engineer |
| Final review | code-reviewer |
| Documentation | documentation-writer |
| Technical coordination | tech-lead |

## Token-Saving Rules
- Inspect structure before large files.
- Read only files needed for the current decision.
- Log relevant reads in `context/read-files-log.md`.
- Keep context summaries compact.
- Use caveman mode for progress, summaries, confirmations, reviews, and post-test reports.

## Acceptance Criteria
- Flat agent files exist and follow the standard contract.
- Flat skill files exist and follow the standard contract.
- Orchestrator has routing matrix and SDD/TDD/caveman rules.
- SDD and TDD are documented.
- Context, decision log, read-files log, guide, ADR, and test plan exist.
- Validators accept the flat structure.
- No per-agent or per-skill folders remain.

## Test Or Validation Plan
- Run `npm run validate:sdd`.
- Run `npm run validate:agents-structure`.
- Run `npm run validate:docs`.
- Run targeted stale-reference search for old package paths.
- Run `npm run validate` and report any pre-existing adapter blocker separately.

## Risks
- Many internal links must change together.
- Distribution validation may remain blocked by the pre-existing missing `adapters/` surface.
- Host adapters may still expect directory skills until adapter scope is restored.

## Definition of Done
- Spec exists.
- Acceptance criteria exist.
- Context is updated.
- Minimal necessary implementation is complete.
- Tests or validators are run.
- Passing and failing checks are reported honestly.
- No unnecessary duplication remains.
- No secrets are exposed.
- No out-of-scope changes are hidden.
- Minimal docs exist.
- Final summary uses caveman mode.
