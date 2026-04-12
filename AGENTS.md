# AGENTS Guide

Use this file as the main navigation map for the starter kit.

## Routing by Goal

| Situation or Goal | Primary Agent | Supporting Skills | Required Rules, Context, and Checklist | Link |
| --- | --- | --- | --- | --- |
| Clarify goals, scope, priorities, or acceptance criteria | `business-agent` | `requirements-extraction` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/business-context.md`, `context/product-context.md`, `checklists/spec-ready.md` | [business-agent](agents/business-agent/agent.md) |
| Turn approved intent into an implementation-ready spec | `spec-agent` | `spec-writing`, `repo-analysis` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/`, `specs/CONTRACT.md`, `checklists/spec-ready.md` | [spec-agent](agents/spec-agent/agent.md) |
| Route work across the core delivery flow | `orchestrator-agent` | `task-breakdown`, `repo-analysis` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/repo-context.md`, `context/delivery-context.md`, `checklists/implementation-ready.md` | [orchestrator-agent](agents/orchestrator-agent/agent.md) |
| Implement approved changes in the repo | `implementation-agent` | `repo-analysis`, `task-breakdown`, `test-planning` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/technical-context.md`, `context/repo-context.md`, `checklists/implementation-ready.md` | [implementation-agent](agents/implementation-agent/agent.md) |
| Review changes for regressions, risk, and missing evidence | `review-agent` | `code-review`, `test-planning` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/technical-context.md`, `context/delivery-context.md`, `checklists/review-ready.md` | [review-agent](agents/review-agent/agent.md) |
| Sync README, templates, and repo documentation to shipped reality | `docs-agent` | `docs-sync` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/repo-context.md`, `context/delivery-context.md`, `checklists/docs-ready.md` | [docs-agent](agents/docs-agent/agent.md) |
| Create new repo artifacts with guided creator flows | `creator-orchestrator-agent` | `creator-intake`, `creator-validation` | Optional module under `optional/`; use only when guided artifact generation is desired | [optional creators](optional/README.md) |

## Resource Index

| Name | Type | Description | Location |
| --- | --- | --- | --- |
| `business-agent` | `agent` | Owns business intent, scope, and acceptance framing | [agents/business-agent/agent.md](agents/business-agent/agent.md) |
| `spec-agent` | `agent` | Writes decision-complete implementation specs | [agents/spec-agent/agent.md](agents/spec-agent/agent.md) |
| `orchestrator-agent` | `agent` | Routes work across the core delivery flow | [agents/orchestrator-agent/agent.md](agents/orchestrator-agent/agent.md) |
| `implementation-agent` | `agent` | Applies approved changes and gathers validation evidence | [agents/implementation-agent/agent.md](agents/implementation-agent/agent.md) |
| `review-agent` | `agent` | Reviews regressions, rule compliance, and residual risk | [agents/review-agent/agent.md](agents/review-agent/agent.md) |
| `docs-agent` | `agent` | Keeps docs, templates, and onboarding paths aligned | [agents/docs-agent/agent.md](agents/docs-agent/agent.md) |
| `repo-analysis` | `skill` | Grounds work in the current repository structure and risks | [skills/repo-analysis/SKILL.md](skills/repo-analysis/SKILL.md) |
| `requirements-extraction` | `skill` | Converts requests into explicit goals, constraints, and acceptance language | [skills/requirements-extraction/SKILL.md](skills/requirements-extraction/SKILL.md) |
| `spec-writing` | `skill` | Drafts implementation-ready specs from approved intent | [skills/spec-writing/SKILL.md](skills/spec-writing/SKILL.md) |
| `task-breakdown` | `skill` | Breaks approved work into ordered slices with done criteria | [skills/task-breakdown/SKILL.md](skills/task-breakdown/SKILL.md) |
| `code-review` | `skill` | Reviews changes for regressions and evidence gaps | [skills/code-review/SKILL.md](skills/code-review/SKILL.md) |
| `test-planning` | `skill` | Scales validation depth to risk and blast radius | [skills/test-planning/SKILL.md](skills/test-planning/SKILL.md) |
| `docs-sync` | `skill` | Keeps README, templates, and docs aligned with shipped behavior | [skills/docs-sync/SKILL.md](skills/docs-sync/SKILL.md) |
| `global-rules` | `rule` | Non-negotiable repository-wide operating rules | [rules/global-rules.md](rules/global-rules.md) |
| `agent-rules` | `rule` | Shared expectations that apply to every agent | [rules/agent-rules.md](rules/agent-rules.md) |
| `skill-rules` | `rule` | Shared expectations that apply to every skill | [rules/skill-rules.md](rules/skill-rules.md) |
| `context/` | `context` | Shared business, product, repo, technical, and delivery context | [context/README.md](context/README.md) |
| `checklists/` | `checklist` | Completion gates for specs, implementation, review, and docs | [checklists/README.md](checklists/README.md) |
| `runbooks/` | `runbook` | Core repeatable workflows for using and extending the starter | [runbooks/README.md](runbooks/README.md) |
| `templates/` | `template` | Minimal templates for new agents, skills, specs, and adapters | [templates/README.md](templates/README.md) |
| `optional/` | `creator` | Advanced creator module and guided artifact-generation assets | [optional/README.md](optional/README.md) |

## Minimal Happy Path

1. Start with shared context in `context/`.
2. Clarify intent with `business-agent` when scope is still fuzzy.
3. Write or update the spec through `spec-agent`.
4. Route execution through `orchestrator-agent`.
5. Implement with `implementation-agent`.
6. Review with `review-agent`.
7. Sync docs with `docs-agent`.
