# Agents And Skills Guide

## How To Talk To The Orchestrator
Start with the outcome, target user, constraints, stack, and expected deliverable. If details are missing, the orchestrator asks only the critical questions before creating or updating a spec.

## Delegation
The orchestrator routes work by need: product, business, finance, growth, design, architecture, frontend, backend, database, DevOps, QA, security, review, documentation, or technical coordination.

## SDD
Every implementation starts with a spec in `specs/`. The spec captures goal, context, scope, business rules, acceptance criteria, risks, edge cases, test plan, and Definition of Done.

## TDD
Each implementation defines tests before or during coding. Completion requires passing tests or an explicit blocked status with evidence.

## Caveman Mode
Use caveman mode for progress updates, summaries, confirmations, reviews, and post-test reports. Keep output short and include tests and risks when relevant.

## Adding Agents
Create a flat file at `agents/name.md` using the standard agent contract in [agents/CONTRACT.md](../agents/CONTRACT.md). Do not create a folder for the agent.

## Adding Skills
Create a flat file at `skills/name.md` using the standard skill contract in [skills/CONTRACT.md](../skills/CONTRACT.md). Do not create a folder for the skill.

## Token Control
Inspect structure first, read only needed files, update [context/read-files-log.md](../context/read-files-log.md), summarize context, and avoid repeating long docs in handoffs.
