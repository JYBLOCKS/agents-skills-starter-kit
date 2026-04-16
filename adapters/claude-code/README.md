---
name: claude-code
description: Tool adapter guidance for claude-code.
trigger: Use this when mapping the neutral core into claude-code without forking the shared repository content.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the mapping from the neutral core into claude-code, but does not replace the repository source of truth.
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
# Claude Code Adapter

## Purpose

Map the neutral core into Claude Code workflows while preserving shared prompts, rules, and context.

## Discovery Model

- Use the chosen agent package as the canonical definition.
- Feed shared rules and local agent rules into Claude Code's instruction layer.
- Keep skills discoverable from `skills/*/`.

## Naming Conventions

- Preserve neutral filenames.
- Add tool-local glue only outside the core folders.

## Mapping

- Agent prompt: `agents/*-agent/prompt.md`
- Agent contract: `agents/*-agent/agent.md`
- Skill contract: `skills/*/SKILL.md`
- Shared context: `context/*.md`

## Reference vs Copy

- Reference the neutral core directly when Claude Code can read the repo.
- Copy only the minimum wrapper content needed for the local tool config.

## Minimum Setup

1. Open the workspace.
2. Select the agent prompt to anchor the session.
3. Load shared rules and the task-specific context.
4. Reference the relevant skills during execution or planning.

## Invoking Creators

- Use `agents/creator-orchestrator-agent/` for ambiguous create requests.
- Use the artifact-specific creator agent plus matching creator skill from `skills/` for guided generation.
- Return a final creation package that follows `creators/CREATION-PACKAGE-CONTRACT.md`.
