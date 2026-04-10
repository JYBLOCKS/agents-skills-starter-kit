# Generic Adapter

Use this adapter as the default contract for any coding tool that does not yet have a dedicated folder.

## Discovery Model

- Read shared context from `context/`
- Read global and category rules from `rules/`
- Discover agents from `agents/*-agent/`
- Discover skills from `skills/*/`
- Read approved specs from `specs/`

## Naming Conventions

- Keep original folder and file names.
- Reference the neutral core rather than copying it when the tool allows file access.

## Mapping

- Prompts: `agents/*-agent/prompt.md`
- Local agent rules: `agents/*-agent/rules.md`
- Shared rules: `rules/*.md`
- Context: `context/*.md`
- Skills: `skills/*/SKILL.md` plus `metadata.yaml`

## Reference vs Copy

- Reference shared Markdown files directly when the tool can access the repo.
- Copy prompts or rules only if the tool requires a specific local config path.

## Minimum Setup

1. Point the tool at the repository root.
2. Load the relevant context and rules into the tool's system prompt or workspace instructions.
3. Reference the chosen agent prompt and any required skills.

## Invoking Creators

- Use `agents/creator-orchestrator-agent/` when the artifact family is unclear.
- Use the matching specialized creator agent when the artifact family is known.
- Load the matching creator skill and questionnaire from `skills/` and `creators/questionnaires/`.
- Expect the final output to follow `creators/CREATION-PACKAGE-CONTRACT.md`.
