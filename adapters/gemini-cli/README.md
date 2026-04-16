---
name: gemini-cli
description: Tool adapter guidance for gemini-cli.
trigger: Use this when mapping the neutral core into gemini-cli without forking the shared repository content.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the mapping from the neutral core into gemini-cli, but does not replace the repository source of truth.
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
# Gemini CLI Adapter

## Purpose

Provide both a native Gemini extension entrypoint and a universal skills CLI fallback.

## Discovery Model

- Native: `gemini-extension.json` plus `GEMINI.md`
- Universal fallback: `npx skills add ... -a gemini-cli`
- Core repository files remain canonical

## Mapping

- Gemini extension context: `GEMINI.md`
- Prompts: `agents/*-agent/prompt.md`
- Agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Context: `context/*.md`
- Skills: `skills/*/SKILL.md`

## Reference vs Copy

- The extension is only a thin bootstrap layer.
- The repository content remains the source of truth.

## Minimum Setup

1. Run `gemini extensions install https://github.com/JYBLOCKS/agents-skills-starter-kit`.
2. Restart Gemini CLI.
3. Use `GEMINI.md` and `AGENTS.md` to route work into the neutral core.
4. If you prefer the shared CLI flow, run `npx skills add JYBLOCKS/agents-skills-starter-kit -a gemini-cli`.
