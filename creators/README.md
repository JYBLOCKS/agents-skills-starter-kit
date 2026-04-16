---
name: creators
description: Overview of creator contracts, templates, and questionnaires.
trigger: Use this when browsing the available Creators resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Creators, but does not replace the canonical documents it references.
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
# Creators

Creators are guided artifact-generation workflows layered on top of the repository's existing agent, skill, spec, rule, context, runbook, checklist, adapter, and template contracts.

## Design Goals

- ask the minimum questions needed to produce a correct artifact
- reuse the neutral core instead of inventing parallel formats
- produce complete draft outputs, not just advice
- stay portable across OpenAI, Claude Code, OpenCode, and future tools

## Core Pieces

- `CONTRACT.md`: shared creator lifecycle
- `AGENT-CONTRACT.md`: rules for creator agents
- `SKILL-CONTRACT.md`: rules for creator skills
- `QUESTIONNAIRE-CONTRACT.md`: structure for question banks
- `CREATION-PACKAGE-CONTRACT.md`: required output shape
- `questionnaires/`: artifact-specific question banks
- `templates/`: creator-facing output templates
- `matrix.md`: creator ownership map by artifact family

## Standard Creator Flow

1. Intent and use case
2. Contract completion and missing decisions
3. Artifact assembly and validation summary
