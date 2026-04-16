---
name: codex
description: Tool adapter guidance for codex.
trigger: Use this when mapping the neutral core into codex without forking the shared repository content.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the mapping from the neutral core into codex, but does not replace the repository source of truth.
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
# Codex Adapter

## Purpose

Provide a native local plugin wrapper for Codex while keeping the starter repository canonical.

## Discovery Model

- Native local plugin: `plugins/ai-starter-kit/.codex-plugin/plugin.json`
- Repo-local marketplace entry: `.agents/plugins/marketplace.json`
- Universal fallback: `npx skills add JYBLOCKS/agents-skills-starter-kit -a codex`

## Mapping

- Codex plugin skills path: `plugins/ai-starter-kit/.codex-plugin/plugin.json -> ../../../skills/`
- Prompts: `agents/*-agent/prompt.md`
- Agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Context: `context/*.md`

## Reference vs Copy

- The local plugin intentionally references the repository's `skills/` directory.
- That discovery root includes core skills plus mirrored installable copies of the skills authored in `optional/skills/`.
- Do not move the plugin folder out of this repository unless you also vendor the referenced core files.

## Minimum Setup

1. Clone the repository.
2. Add the local plugin from `plugins/ai-starter-kit`.
3. Keep the repository checkout intact so the plugin can resolve the shared skills.
4. If you prefer the universal installer, run `npx skills add JYBLOCKS/agents-skills-starter-kit -a codex`.
