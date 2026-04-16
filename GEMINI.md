---
name: gemini-bootstrap
description: Gemini CLI bootstrap context for the AI starter kit extension.
trigger: Use this when Gemini CLI needs a host-specific bootstrap that still points back to the neutral repository core.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns Gemini-specific bootstrap context, but does not fork the neutral starter content.
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
# AI starter kit for Gemini CLI

Use this extension as a thin entrypoint into the neutral starter kit.

## Start Here

1. Read `AGENTS.md` for routing and resource discovery.
2. Use `context/` for reusable project context.
3. Use `rules/` plus agent-local rules before executing tasks.
4. Use `skills/*/SKILL.md` as the callable skill catalog.

## Canonical Paths

- Agents: `agents/*-agent/`
- Skills: `skills/*/`
- Rules: `rules/*.md`
- Context: `context/*.md`
- Checklists: `checklists/*.md`
- Runbooks: `runbooks/*.md`

## Packaging Rule

Do not duplicate the starter content into Gemini-specific files unless the host requires a thin wrapper. The repo root remains the source of truth.
