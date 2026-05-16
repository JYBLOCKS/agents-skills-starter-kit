# Test Plan

## Structure Validation
- Run `npm run validate:agents-structure`.
- Confirm each agent is a flat `.md` file under `agents/`.
- Confirm no per-agent folders remain.

## SDD Validation
- Run `npm run validate:sdd`.
- Confirm SDD, TDD, and caveman artifacts are linked.
- Confirm the orchestrator points to the flat SDD workflow.

## Docs Validation
- Run `npm run validate:docs`.
- Confirm Markdown links resolve.
- Confirm docs stay in English.

## Regression Search
- Run `rg "agents/[a-z0-9-]+/AGENT.md|skills/[a-z0-9-]+/SKILL.md"`.
- Review remaining matches and update stale package references.

## Full Validation
- Run `npm run validate`.
- If validation fails because `adapters/` is missing, report it as a known pre-existing blocker unless adapter restoration is approved.
