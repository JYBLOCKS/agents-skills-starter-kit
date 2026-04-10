# Technical Context

## Core Design

- Markdown is the source of truth for human-facing artifacts.
- YAML is used for lightweight metadata where tools need structured discovery.
- Adapters translate the neutral core into tool-specific layouts and conventions.

## Repository Contracts

- Agents own orchestration and decision boundaries.
- Skills own repeatable capabilities.
- Specs own approved implementation intent.
- Rules constrain behavior globally, locally, and per tool.

## Compatibility Goal

Any tool should be able to consume this repo by:

1. Reading the shared context and rules.
2. Selecting an adapter or the generic fallback.
3. Resolving agent and skill definitions from the canonical contracts.
