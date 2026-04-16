---
name: agents-skills-starter-kit
description: Top-level installation, onboarding, and distribution guide for the starter kit.
trigger: Use this when you need the top-level install commands, onboarding path, or public distribution surface for the starter kit.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns top-level onboarding, installation guidance, and public package framing, but does not replace deeper contracts in the repository.
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
# Multi-Tool Agent Skills Starter Kit

A minimal, tool-agnostic starter for teams building agent-driven delivery workflows with shared agents, reusable skills, portable context, and thin tool adapters.

The repository now ships as one canonical package with verified install paths for `Claude Code`, `Codex`, `Gemini CLI`, `Cursor`, `Windsurf`, `GitHub Copilot`, `Cline`, and a universal fallback. The install surface exposes one combined selectable skill catalog under `skills/` that includes both the core starter skills and mirrors of the skills authored under `optional/skills/`.

## Start Here

- Read [AGENTS.md](AGENTS.md) for the main routing map and resource index.
- Fill in the reusable project context under [context/](context/README.md).
- Keep or adapt the shared rules under [rules/](rules/README.md).
- Write or approve specs under [specs/](specs/README.md).

## Install

```bash
npm install
```
```bash
npm run validate:distribution
```
```bash
npx skills add JYBLOCKS/agents-skills-starter-kit
```

## How Skill Discovery Works

The `skills` CLI discovers installable skills from the repository `skills/` folder.

That behavior matters because the starter kit keeps two different concepts in the repo:

- `skills/`: the install-facing discovery surface that the CLI and Codex plugin actually read
- `optional/skills/`: the optional authoring source for advanced skills that are not part of the minimal happy path

To make optional skills selectable during installation, this repository mirrors the installable optional skills into `skills/`.

That means:

- users get one combined selectable catalog during install
- the minimal/core vs optional distinction still exists in documentation and authoring layout
- the universal installer and the Codex plugin see the same skill set

## Why Optional Skills Now Appear

The original issue was that the installer only enumerated `skills/`.

Even if `optional/skills/` was exported in package metadata, the real installer flow still ignored it because it scans the physical `skills/` directory. The fix in this repository is therefore structural, not just metadata-based:

1. keep optional skills authored under `optional/skills/`
2. mirror those installable skills into `skills/`
3. point package validation and the Codex plugin at the same install-facing `skills/` surface

If you run:

```bash
npx skills add . -l
```

you should now see one combined list that includes both core skills and the formerly optional ones.

## Pick Your Agent

One repository stays canonical. Install wrappers only adapt discovery and host-specific bootstrap.

| Agent                     | Install                                                                           | Path Type           |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------- |
| Claude Code               | `npx skills add JYBLOCKS/agents-skills-starter-kit -a claude-code`                | Universal           |
| Codex                     | Local plugin: `plugins/ai-starter-kit`                                            | Native local plugin |
| Codex fallback            | `npx skills add JYBLOCKS/agents-skills-starter-kit -a codex`                      | Universal           |
| Gemini CLI                | `gemini extensions install https://github.com/JYBLOCKS/agents-skills-starter-kit` | Native extension    |
| Gemini CLI fallback       | `npx skills add JYBLOCKS/agents-skills-starter-kit -a gemini-cli`                 | Universal           |
| Cursor                    | `npx skills add JYBLOCKS/agents-skills-starter-kit -a cursor`                     | Universal           |
| Windsurf                  | `npx skills add JYBLOCKS/agents-skills-starter-kit -a windsurf`                   | Universal           |
| GitHub Copilot            | `npx skills add JYBLOCKS/agents-skills-starter-kit -a github-copilot`             | Universal           |
| Cline                     | `npx skills add JYBLOCKS/agents-skills-starter-kit -a cline`                      | Universal           |
| Any other supported agent | `npx skills add JYBLOCKS/agents-skills-starter-kit`                               | Universal fallback  |

## Supported Install Paths

### Native

- `Gemini CLI`: backed by [gemini-extension.json](gemini-extension.json) and [GEMINI.md](GEMINI.md)
- `Codex`: backed by [plugins/ai-starter-kit/.codex-plugin/plugin.json](plugins/ai-starter-kit/.codex-plugin/plugin.json) and [.agents/plugins/marketplace.json](.agents/plugins/marketplace.json)

### Universal

- `Claude Code`: `npx skills add JYBLOCKS/agents-skills-starter-kit -a claude-code`
- `Cursor`: `npx skills add JYBLOCKS/agents-skills-starter-kit -a cursor`
- `Windsurf`: `npx skills add JYBLOCKS/agents-skills-starter-kit -a windsurf`
- `GitHub Copilot`: `npx skills add JYBLOCKS/agents-skills-starter-kit -a github-copilot`
- `Cline`: `npx skills add JYBLOCKS/agents-skills-starter-kit -a cline`
- `Gemini CLI`: `npx skills add JYBLOCKS/agents-skills-starter-kit -a gemini-cli`
- `Codex`: `npx skills add JYBLOCKS/agents-skills-starter-kit -a codex`
- `Fallback`: `npx skills add JYBLOCKS/agents-skills-starter-kit`

### Local Manual

- `Codex plugin`: clone the repo, keep `plugins/ai-starter-kit` inside the checkout, and add that folder as a local plugin

## Post-Install Verification

- `skills CLI installs`: run `npx skills list` or `npx skills list -a <agent>` and confirm the combined starter skill catalog appears
- `Local package check`: run `npx skills add . -l` in the repo and confirm it reports the full combined catalog
- `Caveman`: confirm `caveman` appears in the installed skill list
- `Formerly optional skills`: confirm skills sourced from `optional/skills/` appear alongside the core skills in the installed list
- `Gemini CLI`: run `/extensions list` after restart and confirm `ai-starter-kit` is installed
- `Codex plugin`: confirm `AI starter kit` appears in the local plugin list and the plugin can resolve `../../../skills/` from its manifest
- `Repository package`: run `npm run validate:distribution`

## Core Starter

The minimal starter path is built around:

- core agents in [agents/](agents/README.md)
- core skills in [skills/](skills/README.md)
- shared context in [context/](context/README.md)
- shared rules in [rules/](rules/README.md)
- checklists in [checklists/](checklists/README.md)
- essential runbooks in [runbooks/](runbooks/README.md)
- minimal templates in [templates/](templates/README.md)
- real adapters in [adapters/](adapters/README.md)
- distribution metadata in [distribution/](distribution/README.md)
- native wrapper artifacts in [plugins/](plugins/ai-starter-kit/README.md)

## Supported Adapters

- `generic`
- `openai`
- `claude-code`
- `opencode`
- `cursor`
- `windsurf`
- `github-copilot`
- `cline`
- `gemini-cli`
- `codex`

## Canonical Package Metadata

- Package id: `agents-skills-starter-kit`
- Display name: `AI starter kit`
- Version source: [package.json](package.json)
- Distribution contract: [distribution/CONTRACT.md](distribution/CONTRACT.md)
- Export map: [distribution/manifest.json](distribution/manifest.json)
- Maintenance runbook: [runbooks/distribution-maintenance.md](runbooks/distribution-maintenance.md)

## Optional Modules

Advanced creator flows live under [optional/](optional/README.md).
They remain in their optional authoring locations, and their installable mirrors are included under `skills/` instead of being hidden behind a separate selector.

## Maintenance Rules

When adding or changing an optional skill:

1. update the canonical source under `optional/skills/`
2. mirror the installable copy into `skills/`
3. update `distribution/manifest.json` if the installable catalog changed
4. run `npm run validate:distribution`
5. run `npx skills add . -l` to confirm the combined catalog still appears correctly

The repository intentionally prefers “one real install surface” over “multiple metadata categories” because that matches how the installer behaves in practice.

## Repository Shape

```text
.
|-- AGENTS.md
|-- GEMINI.md
|-- adapters/
|-- agents/
|-- checklists/
|-- context/
|-- distribution/
|-- gemini-extension.json
|-- optional/
|-- package.json
|-- plugins/
|-- rules/
|-- runbooks/
|-- skills/
|-- specs/
|-- templates/
|-- LICENSE
`-- README.md
```
