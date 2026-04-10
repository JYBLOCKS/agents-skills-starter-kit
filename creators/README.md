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
