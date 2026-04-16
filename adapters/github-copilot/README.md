---
name: github-copilot
description: Tool adapter guidance for github-copilot.
trigger: Use this when mapping the neutral core into github-copilot without forking the shared repository content.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the mapping from the neutral core into github-copilot, but does not replace the repository source of truth.
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
# GitHub Copilot Adapter

## Purpose

Map the neutral core into GitHub Copilot-compatible skill installs and repository workflows.

## Discovery Model

- Install the starter through the Copilot target in the skills CLI.
- Keep the repository root as the source for agents, rules, context, and runbooks.
- Use the installed skills as the portable execution layer.

## Mapping

- Prompts: `agents/*-agent/prompt.md`
- Agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Context: `context/*.md`
- Skills: `skills/*/SKILL.md`

## Reference vs Copy

- The skills CLI handles host placement for the skills.
- The rest of the starter stays referenced from the repo checkout.

## Minimum Setup

1. Run `npx skills add JYBLOCKS/agents-skills-starter-kit -a github-copilot`.
2. Open the repository in your Copilot-supported environment.
3. Use `AGENTS.md` and the chosen agent package to drive the session.
