---
name: cline
description: Tool adapter guidance for cline.
trigger: Use this when mapping the neutral core into cline without forking the shared repository content.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the mapping from the neutral core into cline, but does not replace the repository source of truth.
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
# Cline Adapter

## Purpose

Map the neutral core into Cline with a thin install wrapper and no content forks.

## Discovery Model

- Install the starter through the Cline target in the skills CLI.
- Use the repository root for agents, context, rules, and runbooks.
- Invoke skills from the installed skill payloads.

## Mapping

- Prompts: `agents/*-agent/prompt.md`
- Agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Context: `context/*.md`
- Skills: `skills/*/SKILL.md`

## Reference vs Copy

- Copy only what the skills installer needs for Cline.
- Keep the neutral core as the source of truth.

## Minimum Setup

1. Run `npx skills add JYBLOCKS/agents-skills-starter-kit -a cline`.
2. Open the repository.
3. Start from `AGENTS.md` and the agent package that matches the task.
