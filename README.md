# Multi-Tool Agent Skills Starter Kit

A tool-agnostic repository scaffold for teams building coding-agent workflows with shared agents, reusable skills, portable context, and explicit adapters for multiple tools.

This starter is designed to work with OpenAI, Claude Code, OpenCode, and similar coding assistants without forcing the core of your system to live inside one vendor's config format.

## What This Repo Is

This repository is a documented operating system for agent-driven delivery:

- `agents/` define roles, prompts, decision boundaries, and handoffs
- `skills/` define reusable capabilities with metadata and examples
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
|   `-- docs-agent/
|-- checklists/
|-- context/
|-- rules/
|-- runbooks/
|-- skills/
|   |-- CONTRACT.md
|   |-- repo-analysis/
|   |-- requirements-extraction/
|   |-- architecture-planning/
|   |-- spec-writing/
|   |-- task-breakdown/
|   |-- code-review/
|   |-- test-planning/
|   |-- docs-sync/
|   |-- release-notes/
|   `-- adapter-generation/
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

## Included Skills

The starter ships with ten portable skills:

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

## Acceptance Checklist For This Starter

- README matches the actual repo structure
- Every shipped agent includes the canonical package files
- Every shipped skill includes a contract, metadata, and an example
- Every adapter explains how it consumes the shared core
- The sample end-to-end flow is documented
- No core contract assumes a single vendor or runtime

## License

MIT. See [LICENSE](E:/projects/IN-PROGRESS/agents-skills-starter-kit/LICENSE).
