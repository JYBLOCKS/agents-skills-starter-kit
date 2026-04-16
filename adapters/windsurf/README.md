---
name: windsurf
description: Tool adapter guidance for windsurf.
trigger: Use this when mapping the neutral core into windsurf without forking the shared repository content.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the mapping from the neutral core into windsurf, but does not replace the repository source of truth.
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
# Windsurf Adapter

## Purpose

Map the neutral core into Windsurf sessions without forking repository assets.

## Discovery Model

- Install the starter through the Windsurf target in the skills CLI.
- Resolve agents, rules, and context from the repository root.
- Treat skills as the portable capability layer.

## Mapping

- Prompts: `agents/*-agent/prompt.md`
- Agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Context: `context/*.md`
- Skills: `skills/*/SKILL.md`

## Reference vs Copy

- Copy only the skill payloads required by the host installer.
- Reference the rest of the starter directly from the repository.

## Minimum Setup

1. Run `npx skills add JYBLOCKS/agents-skills-starter-kit -a windsurf`.
2. Open the repository.
3. Route work from `AGENTS.md`.
