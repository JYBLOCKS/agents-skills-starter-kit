---
name: agents-guide
description: Global operating guide for routing work, asking the right questions, selecting skills, and creating new repository artifacts when needed.
trigger: Use this as the primary operating contract before starting work in the starter kit.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns repository-wide workflow, routing, and artifact-creation guidance, but does not replace the underlying agents, skills, rules, or contracts it references.
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
# AGENTS Guide

Use this file as the global operating guide for the starter kit.

The primary agent should use this document to decide:

- how to start a conversation
- what to ask before doing work
- which agent should own the task
- which skills should support that agent
- when to create a new agent, skill, rule, context file, checklist, runbook, or template

## Primary Agent Behavior

The primary agent should not jump straight into implementation unless the request is already clear and locally scoped.

Its default behavior should be:

1. understand the request
2. ask for missing intent, scope, priorities, constraints, and success criteria
3. decide whether the current repo already has the right agent and skills
4. route to the correct delivery or creator flow
5. create missing repository artifacts when the workflow needs them

The primary agent should be comfortable asking multiple useful questions before acting when the request is ambiguous, under-specified, or mixes business goals with implementation detail.

## Global Workflow

### Phase 1: Clarify the Request

Start by grounding the request in the current repository and the user's actual goal.

The primary agent should ask about:

- the outcome the user wants
- what is in scope and out of scope
- constraints, preferences, and non-goals
- whether the user wants a one-off answer, a reusable repo artifact, or a full delivery flow
- what “done” looks like

If the user is asking for a new reusable capability, the primary agent should treat that as a repository design task, not as a one-off answer.

### Phase 2: Choose the Right Path

After clarification, route the request into one of these paths:

- `business-agent` when intent, priorities, scope, or acceptance are still fuzzy
- `spec-agent` when the intent is approved but the implementation contract is missing
- `orchestrator-agent` when work needs sequencing or decomposition
- `implementation-agent` when the repo already has the needed agent/skill structure and the task is ready to execute
- `review-agent` when the user wants review, regressions, or validation evidence
- `docs-agent` when the request is about README, docs, guides, templates, or onboarding alignment
- `creator-orchestrator-agent` when the user needs a new reusable repo artifact or the right artifact family is unclear

### Phase 3: Load Supporting Skills

After choosing the agent, load only the skills that materially help that task.

Use the existing skills first. Typical pairings:

- `business-agent` + `requirements-extraction`
- `spec-agent` + `spec-writing`, `repo-analysis`
- `orchestrator-agent` + `task-breakdown`, `repo-analysis`
- `implementation-agent` + `repo-analysis`, `task-breakdown`, `test-planning`
- `review-agent` + `code-review`, `test-planning`
- `docs-agent` + `docs-sync`
- `creator-orchestrator-agent` + `creator-intake`, `creator-validation`

Do not add skills just because they exist. Load them when they improve correctness, consistency, or output quality.

### Phase 4: Create Missing Artifacts When Needed

If the current repository does not already contain the right reusable artifact, the primary agent should not force the task through the wrong structure.

Instead, route to the creator flow and generate the missing artifact cleanly.

Examples:

- if a new reusable role is needed, create a new agent
- if a reusable capability is missing, create a new skill
- if a repeated behavioral constraint is missing, create or update a rule
- if important shared knowledge is being repeated, create or update context
- if a quality gate is missing, create or update a checklist
- if a repeated operational process is missing, create or update a runbook
- if new artifact creation should be standardized, update creators, questionnaires, or templates

## When the Primary Agent Should Ask More Questions

The primary agent should keep asking until it can clearly state:

- goal
- audience or owner
- constraints
- success criteria
- affected artifact type
- whether the work is reusable or one-off

Ask more questions when:

- the user says “I want a better flow” but does not define what better means
- the user wants a new agent or skill but the repo role boundary is unclear
- the request could be solved by a rule, context file, skill, or agent and the right artifact is not obvious
- the request changes repository behavior for multiple future tasks
- the user wants the system to “always” or “never” do something and the operational boundary is still vague

Do not stop at one question if the workflow still depends on unstated assumptions.

## Artifact Creation Flow

When the user wants the repo to gain a new capability, use the creator flow.

The primary entry point is:

- `creator-orchestrator-agent`

Supporting skills:

- `creator-intake`
- `creator-validation`

Shared contracts:

- `creators/CONTRACT.md`
- `creators/matrix.md`
- `creators/AGENT-CONTRACT.md`
- `creators/SKILL-CONTRACT.md`
- `creators/QUESTIONNAIRE-CONTRACT.md`
- `creators/CREATION-PACKAGE-CONTRACT.md`

The creator flow should follow three phases:

1. identify the artifact family and missing decisions
2. ask all contract-relevant questions for that artifact
3. produce a complete creation package with validation notes

## How to Decide What to Create

Use this decision guide:

- create an `agent` when a new reusable role needs its own mission, scope, prompt, checklist, and handoff behavior
- create a `skill` when a reusable capability or workflow should support multiple agents or sessions
- create or update a `rule` when behavior should be constrained consistently across many uses
- create or update `context` when shared business, product, repo, or technical knowledge should live in one reusable place
- create a `checklist` when a completion gate or evidence threshold needs to be standardized
- create a `runbook` when a process should be repeatable without reinterpretation
- create or update a `template` when new artifacts need a stable starting structure
- create or update `creators` when artifact generation itself needs to become systematic

## Routing by Goal

| Situation or Goal | Primary Agent | Supporting Skills | Required Rules, Context, and Checklist | Link |
| --- | --- | --- | --- | --- |
| Clarify goals, scope, priorities, or acceptance criteria | `business-agent` | `requirements-extraction` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/business-context.md`, `context/product-context.md`, `checklists/spec-ready.md` | [business-agent](agents/business-agent/agent.md) |
| Turn approved intent into an implementation-ready spec | `spec-agent` | `spec-writing`, `repo-analysis` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/`, `specs/CONTRACT.md`, `checklists/spec-ready.md` | [spec-agent](agents/spec-agent/agent.md) |
| Route work across the core delivery flow | `orchestrator-agent` | `task-breakdown`, `repo-analysis` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/repo-context.md`, `context/delivery-context.md`, `checklists/implementation-ready.md` | [orchestrator-agent](agents/orchestrator-agent/agent.md) |
| Implement approved changes in the repo | `implementation-agent` | `repo-analysis`, `task-breakdown`, `test-planning` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/technical-context.md`, `context/repo-context.md`, `checklists/implementation-ready.md` | [implementation-agent](agents/implementation-agent/agent.md) |
| Review changes for regressions, risk, and missing evidence | `review-agent` | `code-review`, `test-planning` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/technical-context.md`, `context/delivery-context.md`, `checklists/review-ready.md` | [review-agent](agents/review-agent/agent.md) |
| Sync README, templates, and repo documentation to shipped reality | `docs-agent` | `docs-sync` | `rules/global-rules.md`, `rules/agent-rules.md`, `context/repo-context.md`, `context/delivery-context.md`, `checklists/docs-ready.md` | [docs-agent](agents/docs-agent/agent.md) |
| Create or extend repo artifacts through guided generation | `creator-orchestrator-agent` | `creator-intake`, `creator-validation` | `rules/global-rules.md`, `rules/agent-rules.md`, `creators/CONTRACT.md`, `creators/matrix.md`, `runbooks/create-with-creators.md` | [creator-orchestrator-agent](agents/creator-orchestrator-agent/agent.md) |

## Resource Index

| Name | Type | Description | Location |
| --- | --- | --- | --- |
| `business-agent` | `agent` | Owns business intent, scope, and acceptance framing | [agents/business-agent/agent.md](agents/business-agent/agent.md) |
| `spec-agent` | `agent` | Writes decision-complete implementation specs | [agents/spec-agent/agent.md](agents/spec-agent/agent.md) |
| `orchestrator-agent` | `agent` | Routes work across the core delivery flow | [agents/orchestrator-agent/agent.md](agents/orchestrator-agent/agent.md) |
| `implementation-agent` | `agent` | Applies approved changes and gathers validation evidence | [agents/implementation-agent/agent.md](agents/implementation-agent/agent.md) |
| `review-agent` | `agent` | Reviews regressions, rule compliance, and residual risk | [agents/review-agent/agent.md](agents/review-agent/agent.md) |
| `docs-agent` | `agent` | Keeps docs, templates, and onboarding paths aligned | [agents/docs-agent/agent.md](agents/docs-agent/agent.md) |
| `creator-orchestrator-agent` | `agent` | Detects the artifact family, asks the right creator questions, and routes to specialized creator flows | [agents/creator-orchestrator-agent/agent.md](agents/creator-orchestrator-agent/agent.md) |
| `repo-analysis` | `skill` | Grounds work in the current repository structure and risks | [skills/repo-analysis/SKILL.md](skills/repo-analysis/SKILL.md) |
| `caveman` | `skill` | Forces ultra-compact, token-efficient output without dropping correctness | [skills/caveman/SKILL.md](skills/caveman/SKILL.md) |
| `requirements-extraction` | `skill` | Converts requests into explicit goals, constraints, and acceptance language | [skills/requirements-extraction/SKILL.md](skills/requirements-extraction/SKILL.md) |
| `spec-writing` | `skill` | Drafts implementation-ready specs from approved intent | [skills/spec-writing/SKILL.md](skills/spec-writing/SKILL.md) |
| `task-breakdown` | `skill` | Breaks approved work into ordered slices with done criteria | [skills/task-breakdown/SKILL.md](skills/task-breakdown/SKILL.md) |
| `code-review` | `skill` | Reviews changes for regressions and evidence gaps | [skills/code-review/SKILL.md](skills/code-review/SKILL.md) |
| `test-planning` | `skill` | Scales validation depth to risk and blast radius | [skills/test-planning/SKILL.md](skills/test-planning/SKILL.md) |
| `docs-sync` | `skill` | Keeps README, templates, and docs aligned with shipped behavior | [skills/docs-sync/SKILL.md](skills/docs-sync/SKILL.md) |
| `creator-intake` | `skill` | Runs the first creator phase to identify artifact family, name/path, and missing decisions | [skills/creator-intake/SKILL.md](skills/creator-intake/SKILL.md) |
| `creator-validation` | `skill` | Validates generated artifacts against the current repository contract | [skills/creator-validation/SKILL.md](skills/creator-validation/SKILL.md) |
| `global-rules` | `rule` | Non-negotiable repository-wide operating rules | [rules/global-rules.md](rules/global-rules.md) |
| `agent-rules` | `rule` | Shared expectations that apply to every agent | [rules/agent-rules.md](rules/agent-rules.md) |
| `skill-rules` | `rule` | Shared expectations that apply to every skill | [rules/skill-rules.md](rules/skill-rules.md) |
| `context/` | `context` | Shared business, product, repo, technical, and delivery context | [context/README.md](context/README.md) |
| `checklists/` | `checklist` | Completion gates for specs, implementation, review, and docs | [checklists/README.md](checklists/README.md) |
| `runbooks/` | `runbook` | Repeatable workflows for operating and extending the starter | [runbooks/README.md](runbooks/README.md) |
| `templates/` | `template` | Minimal templates for new agents, skills, specs, and adapters | [templates/README.md](templates/README.md) |
| `creators/` | `creator` | Guided artifact-generation contracts, questionnaires, templates, and ownership map | [creators/README.md](creators/README.md) |
| `distribution/` | `distribution` | Canonical package metadata, host export map, and install contract | [distribution/README.md](distribution/README.md) |
| `plugins/` | `plugin` | Native local plugin wrappers that point back to the neutral core | [plugins/ai-starter-kit/README.md](plugins/ai-starter-kit/README.md) |

## Default Starter Flow

Use this default flow unless the task is obviously smaller:

1. Clarify the request with questions.
2. Extract goals, scope, constraints, and acceptance.
3. Choose the correct existing agent.
4. Load the minimal supporting skill set.
5. If a reusable repo artifact is missing, route into the creator flow and generate it.
6. Return to the delivery flow once the missing artifact exists.
7. Implement, review, and sync docs as needed.
