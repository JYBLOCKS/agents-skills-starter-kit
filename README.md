# Multi-Tool Agent Skills Starter Kit

A tool-agnostic repository scaffold for teams building coding-agent workflows with shared agents, reusable skills, portable context, and explicit adapters for multiple tools.

This starter is designed to work with OpenAI, Claude Code, OpenCode, and similar coding assistants without forcing the core of your system to live inside one vendor's config format.

## What This Repo Is

This repository is a documented operating system for agent-driven delivery:

- `agents/` define roles, prompts, decision boundaries, and handoffs
- `skills/` define reusable capabilities with metadata and examples
- `creators/` define guided creation contracts, questionnaires, and output packages
- `context/` stores shared business, product, technical, repo, and delivery context
- `rules/` stores global, agent, and skill rules
- `specs/` stores approved product and implementation specs
- `runbooks/` stores repeatable operating workflows
- `checklists/` stores completion gates
- `adapters/` map the neutral core into tool-specific conventions
- `templates/` help contributors add new assets without inventing formats

This repo is not a runtime or multi-agent execution engine in v1. It is the structure and documentation layer that makes those systems easier to build consistently.

## Supported Tools

Explicit adapters are included for:

- OpenAI
- Claude Code
- OpenCode
- Generic fallback for any unsupported tool

Extension placeholders are included for:

- Cursor
- Windsurf
- Aider

## Repository Structure

```text
.
|-- adapters/
|   |-- CONTRACT.md
|   |-- generic/
|   |-- openai/
|   |-- claude-code/
|   |-- opencode/
|   |-- cursor/
|   |-- windsurf/
|   `-- aider/
|-- agents/
|   |-- CONTRACT.md
|   |-- orchestrator-agent/
|   |-- business-agent/
|   |-- spec-agent/
|   |-- implementation-agent/
|   |-- review-agent/
|   |-- docs-agent/
|   |-- creator-orchestrator-agent/
|   |-- agent-creator-agent/
|   |-- skill-creator-agent/
|   |-- rule-creator-agent/
|   |-- spec-creator-agent/
|   |-- context-creator-agent/
|   |-- runbook-creator-agent/
|   |-- checklist-creator-agent/
|   |-- adapter-creator-agent/
|   `-- template-creator-agent/
|-- checklists/
|-- context/
|-- creators/
|   |-- CONTRACT.md
|   |-- AGENT-CONTRACT.md
|   |-- SKILL-CONTRACT.md
|   |-- QUESTIONNAIRE-CONTRACT.md
|   |-- CREATION-PACKAGE-CONTRACT.md
|   |-- questionnaires/
|   `-- templates/
|-- rules/
|-- runbooks/
|-- skills/
|   |-- CONTRACT.md
|   |-- creator-intake/
|   |-- creator-validation/
|   |-- agent-creation/
|   |-- skill-creation/
|   |-- rule-creation/
|   |-- spec-creation/
|   |-- context-creation/
|   |-- runbook-creation/
|   |-- checklist-creation/
|   |-- adapter-creation/
|   |-- repo-analysis/
|   |-- requirements-extraction/
|   |-- architecture-planning/
|   |-- spec-writing/
|   |-- task-breakdown/
|   |-- code-review/
|   |-- test-planning/
|   |-- docs-sync/
|   |-- release-notes/
|   |-- adapter-generation/
|   `-- template-creation/
|-- specs/
|-- templates/
|-- LICENSE
`-- README.md
```

## Canonical Workflow

The default paper workflow is:

1. `business-agent` frames goals, non-goals, and success criteria.
2. `spec-agent` turns intent into an implementation-ready spec.
3. `orchestrator-agent` routes work and selects supporting skills.
4. `implementation-agent` applies the approved change.
5. `review-agent` checks regressions, rule compliance, and missing evidence.
6. `docs-agent` syncs README, templates, runbooks, and release-facing notes.

## Contracts

This starter defines explicit contracts so contributors do not invent incompatible formats:

- [agents/CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/agents/CONTRACT.md)
- [skills/CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/skills/CONTRACT.md)
- [specs/CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/specs/CONTRACT.md)
- [adapters/CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/adapters/CONTRACT.md)
- [creators/CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/CONTRACT.md)
- [creators/AGENT-CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/AGENT-CONTRACT.md)
- [creators/SKILL-CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/SKILL-CONTRACT.md)
- [creators/QUESTIONNAIRE-CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/QUESTIONNAIRE-CONTRACT.md)
- [creators/CREATION-PACKAGE-CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/CREATION-PACKAGE-CONTRACT.md)

## Included Agents

- `orchestrator-agent`: routes missions into ordered flows
- `business-agent`: owns product intent, scope, KPIs, and acceptance language
- `spec-agent`: writes implementation-ready specs
- `implementation-agent`: executes approved work
- `review-agent`: reviews risk, regressions, and gaps
- `docs-agent`: keeps repository docs aligned with reality

Every shipped agent includes:

- `agent.md`
- `prompt.md`
- `rules.md`
- `checklist.md`
- `handoff-template.md`
- `example.md`

## Creator Agents

The starter also ships a guided creator system:

- `creator-orchestrator-agent`
- `agent-creator-agent`
- `skill-creator-agent`
- `rule-creator-agent`
- `spec-creator-agent`
- `context-creator-agent`
- `runbook-creator-agent`
- `checklist-creator-agent`
- `adapter-creator-agent`
- `template-creator-agent`

These agents interview the user in three phases:

1. intent and use case
2. contract completion and missing decisions
3. artifact assembly and validation summary

## Creator Skills

The starter ships with guided creator skills and shared creator utilities:

- `creator-intake`
- `creator-validation`
- `agent-creation`
- `skill-creation`
- `rule-creation`
- `spec-creation`
- `context-creation`
- `runbook-creation`
- `checklist-creation`
- `adapter-creation`
- `template-creation`

## Foundational Skills

The starter also ships foundational workflow skills:

- `repo-analysis`
- `requirements-extraction`
- `architecture-planning`
- `spec-writing`
- `task-breakdown`
- `code-review`
- `test-planning`
- `docs-sync`
- `release-notes`
- `adapter-generation`

Every shipped skill includes:

- `SKILL.md`
- `metadata.yaml`
- at least one example

## Using Creators

Use creators when you want the repo to guide artifact generation instead of manually copying templates.

Default flow:

1. Start with [agents/creator-orchestrator-agent/agent.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/agents/creator-orchestrator-agent/agent.md) if the artifact family is unclear.
2. Route to the specialized creator agent for the target artifact family.
3. Load the matching creator skill and questionnaire from [creators/questionnaires/README.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/questionnaires/README.md).
4. Return a final creation package that follows [creators/CREATION-PACKAGE-CONTRACT.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/CREATION-PACKAGE-CONTRACT.md).

Creator ownership map: [creators/matrix.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/matrix.md)

## Rules, Context, Runbooks, and Checklists

Use these folders as the durable operating layer of the repo:

- [rules/README.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/rules/README.md)
- [context/README.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/context/README.md)
- [runbooks/README.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/runbooks/README.md)
- [checklists/README.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/checklists/README.md)

These are meant to be reused across tools and across projects.

## Templates

Starter templates live in:

- [templates/README.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/templates/README.md)
- [templates/agent/agent.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/templates/agent/agent.md)
- [templates/skill/SKILL.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/templates/skill/SKILL.md)
- [templates/spec/spec.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/templates/spec/spec.md)
- [templates/tool-adapter.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/templates/tool-adapter.md)

## How To Use This Starter

1. Fill in the shared files under `context/` for your project.
2. Keep or adapt the default rules in `rules/`.
3. Write or approve a spec in `specs/`.
4. Choose an adapter under `adapters/`.
5. Use the shipped agents and skills as-is or copy the templates to extend them.

## How To Add A New Agent

1. Copy `templates/agent/` into `agents/<role>-agent/`
2. Fill in role, mission, scope, triggers, inputs, and outputs
3. Add a realistic prompt, checklist, handoff template, and example
4. Link the right context, runbooks, and checklists

Detailed flow: [runbooks/new-agent.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/runbooks/new-agent.md)

## How To Add A New Skill

1. Copy `templates/skill/` into `skills/<skill-name>/`
2. Define the skill contract in `SKILL.md`
3. Add `metadata.yaml`
4. Add at least one example
5. Add adapter notes only when behavior differs by tool

Detailed flow: [runbooks/new-skill.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/runbooks/new-skill.md)

## How To Onboard A New Tool

1. Start from [adapters/generic/README.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/adapters/generic/README.md)
2. Copy [templates/tool-adapter.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/templates/tool-adapter.md)
3. Document discovery, naming, mapping, and minimum setup
4. Keep the neutral core as the source of truth

Detailed flow: [runbooks/new-tool-adapter.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/runbooks/new-tool-adapter.md)

## Create Artifacts With Creators

Guided creation runbooks:

- [runbooks/create-with-creators.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/runbooks/create-with-creators.md)
- [runbooks/extend-creator.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/runbooks/extend-creator.md)

## Adapter Matrix

| Tool | Status | Adapter Folder | Notes |
| --- | --- | --- | --- |
| Generic | Ready | `adapters/generic/` | Baseline contract for any unsupported tool |
| OpenAI | Ready | `adapters/openai/` | Thin mapping over shared prompts, rules, and context |
| Claude Code | Ready | `adapters/claude-code/` | Uses neutral agent packages as source of truth |
| OpenCode | Ready | `adapters/opencode/` | Shares the same contracts and setup pattern |
| Cursor | Placeholder | `adapters/cursor/` | Extend from the generic adapter |
| Windsurf | Placeholder | `adapters/windsurf/` | Extend from the generic adapter |
| Aider | Placeholder | `adapters/aider/` | Extend from the generic adapter |

## Creator Matrix

| Artifact Family | Creator Agent | Creator Skill | Output |
| --- | --- | --- | --- |
| Agents | `agent-creator-agent` | `agent-creation` | Full agent package |
| Skills | `skill-creator-agent` | `skill-creation` | Full skill package |
| Rules | `rule-creator-agent` | `rule-creation` | Rule document or rule set |
| Specs | `spec-creator-agent` | `spec-creation` | Complete spec draft |
| Context | `context-creator-agent` | `context-creation` | Context document |
| Runbooks | `runbook-creator-agent` | `runbook-creation` | Runbook draft |
| Checklists | `checklist-creator-agent` | `checklist-creation` | Checklist draft |
| Adapters | `adapter-creator-agent` | `adapter-creation` | Adapter package |
| Templates | `template-creator-agent` | `template-creation` | Template file or package |

## Acceptance Checklist For This Starter

- README matches the actual repo structure
- Every shipped agent includes the canonical package files
- Every shipped creator agent includes the canonical package files
- Every shipped skill includes a contract, metadata, and an example
- Every shipped creator skill includes a contract, metadata, questionnaire mapping, and an example
- Every adapter explains how it consumes the shared core
- The sample end-to-end flow is documented
- The guided creator flow is documented
- No core contract assumes a single vendor or runtime

## License

MIT. See [LICENSE](E:/projects/IN-PROGRESS/agents-skills-starter-kit/LICENSE).
