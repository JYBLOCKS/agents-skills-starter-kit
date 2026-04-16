---
name: cursor
description: Tool adapter guidance for cursor.
trigger: Use this when mapping the neutral core into cursor without forking the shared repository content.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the mapping from the neutral core into cursor, but does not replace the repository source of truth.
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
# Cursor Adapter

## Purpose

Map the neutral core into Cursor workflows while keeping the repository root canonical.

## Discovery Model

- Install the starter through the skills CLI target for Cursor.
- Use `AGENTS.md` as the routing map.
- Reference shared rules, context, and skills directly from the repo.

## Mapping

- Prompts: `agents/*-agent/prompt.md`
- Agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Context: `context/*.md`
- Skills: `skills/*/SKILL.md`

## Reference vs Copy

- Let the installer place the skills where Cursor expects them.
- Keep agents, rules, context, and runbooks referenced from the repository checkout.

## Minimum Setup

1. Run `npx skills add JYBLOCKS/agents-skills-starter-kit -a cursor`.
2. Open the repository in Cursor.
3. Start from `AGENTS.md` and the relevant agent package.
