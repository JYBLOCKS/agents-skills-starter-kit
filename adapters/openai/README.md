# OpenAI Adapter

## Purpose

Map the neutral core into OpenAI-oriented coding workflows without duplicating the repository's source-of-truth docs.

## Discovery Model

- Use the selected agent's `prompt.md` as the base role prompt.
- Layer shared rules from `rules/` into system or developer instructions.
- Pull shared context files into the model workspace or prompt assembly.
- Reference skills from `skills/*/SKILL.md`.

## Naming Conventions

- Keep neutral core names unchanged.
- Create tool-local wrappers only when the host environment requires them.

## Mapping

- Prompts: `agents/*-agent/prompt.md`
- Rules: `rules/*.md` plus `agents/*-agent/rules.md`
- Context: `context/*.md`
- Checklists: `checklists/*.md`
- Runbooks: `runbooks/*.md`

## Reference vs Copy

- Reference shared files directly whenever the OpenAI environment can access the repo.
- Copy only short, tool-required bootstrap instructions into the host configuration.

## Minimum Setup

1. Choose the active agent.
2. Load shared rules and the agent-local rules.
3. Provide the required context files for the current task.
4. Link any relevant skills by name and path.

## Invoking Creators

- Start with `optional/agents/creator-orchestrator-agent/` when the user asks to create a new repository artifact.
- Switch to the specialized creator agent once the artifact family is known.
- Load the corresponding creator skill and questionnaire from `optional/skills/` and `optional/creators/questionnaires/` so the conversation follows the shared creator contract.

## Notes

- Keep provider-specific instructions thin.
- Prefer adapter notes over forking agent prompts.
