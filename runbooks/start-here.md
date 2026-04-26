---
name: start-here
description: Human-first navigation guide for choosing the right entry point in the starter kit.
trigger: Use this when a contributor needs to understand the repo quickly without reading every contract first.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the short human navigation path for the repository, but does not replace the canonical contracts in AGENTS, agents, skills, rules, context, or creators.
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
# Start Here

This document is for humans.

It does not replace repository contracts. It helps you reach the right file quickly.

## Core Repository Rule

The starter protects two things at once:

- human readability
- stable contracts for agents and hosts

That means:

- do not invent parallel formats
- do not hide the real structure
- do not duplicate contracts when a canonical source already exists

## If You Want To Use The Starter

Read in this order:

1. [README.md](../README.md)
2. [context/README.md](../context/README.md)
3. [runbooks/new-project-bootstrap.md](new-project-bootstrap.md)
4. the host adapter or plugin you plan to use

## If You Want To Run Work In The Repository

Use this map:

| Need | Entry point |
| --- | --- |
| clarify goal and scope | [agents/business-agent/agent.md](../agents/business-agent/agent.md) |
| write a spec | [agents/spec-agent/agent.md](../agents/spec-agent/agent.md) |
| decompose or route work | [agents/orchestrator-agent/agent.md](../agents/orchestrator-agent/agent.md) |
| implement approved changes | [agents/implementation-agent/agent.md](../agents/implementation-agent/agent.md) |
| review risk or regressions | [agents/review-agent/agent.md](../agents/review-agent/agent.md) |
| sync docs | [agents/docs-agent/agent.md](../agents/docs-agent/agent.md) |

## If You Want To Extend The Starter

Ask first:

> Is this a reusable capability, or only a one-off need?

If it is reusable:

- new reusable role: create an agent
- new reusable capability: create a skill
- shared behavioral constraint: create or update a rule
- shared knowledge: create or update context
- quality gate: create or update checklist
- repeatable process: create or update runbook
- stable artifact starter shape: create or update template
- guided artifact generation: start in `creators/`

## If You Are Not Sure Which Artifact To Change

Read in this order:

1. [AGENTS.md](../AGENTS.md) for full routing.
2. [creators/README.md](../creators/README.md) if you suspect a reusable artifact is missing.
3. [creators/matrix.md](../creators/matrix.md) for ownership by artifact family.

## What To Avoid

- do not place global rules inside one agent when they apply repository-wide
- do not bury reusable context inside local prompts
- do not create a new artifact when an existing one already fits
- do not copy long explanations across multiple `README` files when one canonical source is enough

## Practical Shortcut

If a human needs to understand the repository:

- start in `README.md`
- use this runbook to choose a path
- open `AGENTS.md` when you know which system area matters
