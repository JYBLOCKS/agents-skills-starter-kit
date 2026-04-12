# Multi-Tool Agent Skills Starter Kit

A minimal, tool-agnostic starter for teams building agent-driven delivery workflows with shared agents, reusable skills, portable context, and thin tool adapters.

## Start Here

- Read [AGENTS.md](AGENTS.md) for the main routing map and resource index.
- Fill in the reusable project context under [context/](context/README.md).
- Keep or adapt the shared rules under [rules/](rules/README.md).
- Write or approve specs under [specs/](specs/README.md).

## Core Starter

The minimal starter path is built around:

- core agents in [agents/](agents/README.md)
- core skills in [skills/](skills/README.md)
- shared context in [context/](context/README.md)
- shared rules in [rules/](rules/README.md)
- checklists in [checklists/](checklists/README.md)
- essential runbooks in [runbooks/](runbooks/README.md)
- minimal templates in [templates/](templates/README.md)
- real adapters in [adapters/](adapters/README.md)

## Supported Adapters

- `generic`
- `openai`
- `claude-code`
- `opencode`

## Optional Modules

Advanced creator flows live under [optional/](optional/README.md).
They are still available, but they are no longer part of the starter's happy path.

## Repository Shape

```text
.
|-- AGENTS.md
|-- adapters/
|-- agents/
|-- checklists/
|-- context/
|-- optional/
|-- rules/
|-- runbooks/
|-- skills/
|-- specs/
|-- templates/
|-- LICENSE
`-- README.md
```
