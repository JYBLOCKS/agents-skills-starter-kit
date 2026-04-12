# OpenCode Adapter

## Purpose

Map the neutral core into OpenCode-style coding sessions so the same agents, skills, and rules can be reused.

## Discovery Model

- Resolve the active agent from `agents/`.
- Read shared rules and context from the root folders.
- Use skills as reusable capability docs with metadata for discovery.

## Naming Conventions

- Preserve neutral names.
- Keep tool-local files thin and derived.

## Mapping

- Prompts: `agents/*-agent/prompt.md`
- Agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Shared context: `context/*.md`
- Skills: `skills/*/SKILL.md`

## Reference vs Copy

- Reference shared files directly where possible.
- Copy only bootstrap instructions that the host tool cannot read from the repo.

## Minimum Setup

1. Select the active agent.
2. Load the shared and local rules.
3. Attach the relevant context and spec files.
4. Reference the skills needed for the task.

## Invoking Creators

- Route create requests through `optional/agents/creator-orchestrator-agent/` first when the target family is unclear.
- Load the specialized creator agent, creator skill, and questionnaire for the selected artifact family from `optional/agents/`, `optional/skills/`, and `optional/creators/questionnaires/`.
- Use `optional/creators/CREATION-PACKAGE-CONTRACT.md` as the required final output shape.
