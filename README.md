# Multi-Tool Agent Skills Starter Kit

Tool-agnostic starter kit for building reliable agent workflows with reusable agents, skills, rules, shared context, and lightweight host adapters.

This repository keeps two surfaces in sync:

- Human navigation: quick onboarding and clear folder purpose.
- Agent contracts: stable, canonical instructions and reusable artifacts.

The canonical contract surface lives in `AGENTS.md`, `agents/`, `skills/`, `rules/`, `context/`, and `creators/`.

## Quick Start

### If you are a human contributor

Read in this order:

1. [README.md](README.md)
2. [runbooks/start-here.md](runbooks/start-here.md)
3. [AGENTS.md](AGENTS.md) when you need full routing and artifact-creation contracts

### If you are an agent

Start here:

1. [AGENTS.md](AGENTS.md) for primary routing rules.
2. `rules/` and `context/` for shared constraints and grounding.
3. `agents/`, `skills/`, `checklists/`, and `creators/` only as needed by the selected flow.

## Repository Map

| Folder | Human value | Agent value |
| --- | --- | --- |
| `agents/` | reusable roles and flow ownership | canonical decision and handoff packages |
| `skills/` | reusable capabilities | portable execution contracts |
| `rules/` | shared constraints | behavior source of truth |
| `context/` | stable project knowledge | reusable routing and execution grounding |
| `checklists/` | done criteria | concrete quality gates |
| `runbooks/` | guided workflows | operational support for delivery |
| `creators/` | guided artifact generation | creation contracts, questionnaires, templates |
| `templates/` | starter skeletons | canonical starting structures |
| `adapters/` | host-specific setup guidance | host mapping to canonical contracts |
| `distribution/` | install/export surface | manifest, compatibility, validation mapping |
| `plugins/` | native host wrappers | local host integration bridge |
| `scripts/` | maintenance and validation automation | contract and distribution enforcement |
| `shared/` | shared references across docs/contracts | reusable references like tool permissions |
| `specs/` | implementation intent contracts | approved specs and examples |

## Core Flows

### Use the starter in a new project

1. Complete baseline context in [context/README.md](context/README.md).
2. Follow [runbooks/new-project-bootstrap.md](runbooks/new-project-bootstrap.md).
3. Select the right host route in `adapters/` or `plugins/`.
4. Run validation before publishing changes.

### Run delivery work with agents

1. `business-agent`: clarify goal, scope, and acceptance.
2. `spec-agent`: convert approved intent into an implementation contract.
3. `orchestrator-agent`: decompose and route execution.
4. `implementation-agent`: implement approved changes.
5. `review-agent`: check regressions, risk, and evidence.
6. `docs-agent`: align docs and onboarding with shipped reality.

### Extend repository capability

1. Use [runbooks/start-here.md](runbooks/start-here.md) to decide the right artifact family.
2. If reusable capability is missing, use [creators/README.md](creators/README.md).
3. Generate the artifact through creator contracts instead of ad-hoc formats.

## Installation

```bash
npm install
```

```bash
npm run validate:distribution
```

```bash
npm run validate:docs
```

```bash
npx skills add JYBLOCKS/agents-skills-starter-kit
```

## Supported Hosts

| Host | Install | Type |
| --- | --- | --- |
| Claude Code | `npx skills add JYBLOCKS/agents-skills-starter-kit -a claude-code` | Universal |
| Codex | Local plugin: `plugins/ai-starter-kit` | Native |
| Codex fallback | `npx skills add JYBLOCKS/agents-skills-starter-kit -a codex` | Universal |
| Gemini CLI | `gemini extensions install https://github.com/JYBLOCKS/agents-skills-starter-kit` | Native |
| Gemini CLI fallback | `npx skills add JYBLOCKS/agents-skills-starter-kit -a gemini-cli` | Universal |
| Cursor | `npx skills add JYBLOCKS/agents-skills-starter-kit -a cursor` | Universal |
| Windsurf | `npx skills add JYBLOCKS/agents-skills-starter-kit -a windsurf` | Universal |
| GitHub Copilot | `npx skills add JYBLOCKS/agents-skills-starter-kit -a github-copilot` | Universal |
| Cline | `npx skills add JYBLOCKS/agents-skills-starter-kit -a cline` | Universal |
| Fallback | `npx skills add JYBLOCKS/agents-skills-starter-kit` | Universal |

## Read by Goal

| Goal | Read first | Then |
| --- | --- | --- |
| learn the repo quickly | [runbooks/start-here.md](runbooks/start-here.md) | [AGENTS.md](AGENTS.md) |
| modify the agent flow | [AGENTS.md](AGENTS.md) | `agents/`, `skills/`, `rules/`, `context/` |
| create a new artifact | [creators/README.md](creators/README.md) | `creators/CONTRACT.md`, `creators/matrix.md` |
| add an agent | [agents/README.md](agents/README.md) | `templates/agent/`, `distribution/manifest.json` |
| add a skill | [skills/README.md](skills/README.md) | `templates/skill/`, `rules/skill-rules.md` |
| document a process | [runbooks/README.md](runbooks/README.md) | `checklists/`, `context/` when needed |
| change distribution | [distribution/README.md](distribution/README.md) | `distribution/manifest.json`, `package.json` |

## Validation

Run before merging structural or contract changes:

```bash
npm run validate:distribution
```

```bash
npm run validate:docs
```

Catalog sanity check:

```bash
npx skills add . -l
```

Recommended checks:

- confirm all export paths in `distribution/manifest.json` exist
- confirm host wrappers still resolve to canonical repository contracts
- confirm `AGENTS.md`, this `README.md`, and `runbooks/start-here.md` describe the same flow

## Highest-Signal Files

- [runbooks/start-here.md](runbooks/start-here.md): shortest human navigation path
- [AGENTS.md](AGENTS.md): primary routing and artifact-creation contract
- [distribution/manifest.json](distribution/manifest.json): exported install surface
- [context/README.md](context/README.md): shared context system
- [creators/README.md](creators/README.md): guided artifact generation flow
- [runbooks/README.md](runbooks/README.md): runbook index

## Top-Level Structure

```text
.
|-- AGENTS.md
|-- README.md
|-- adapters/
|-- agents/
|-- checklists/
|-- context/
|-- creators/
|-- distribution/
|-- plugins/
|-- rules/
|-- runbooks/
|-- scripts/
|-- shared/
|-- skills/
|-- specs/
`-- templates/
```
