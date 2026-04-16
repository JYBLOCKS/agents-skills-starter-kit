---
name: contract
description: Creator contract document for CONTRACT.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Contract, but does not replace the concrete artifacts that implement them.
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
# Creator Contract

Every creator must follow the same three phases:

## Phase 1: Intent and Use Case

- identify the artifact family
- understand the requested outcome
- normalize the target name and path
- detect dependencies on existing contracts or related artifacts

## Phase 2: Contract Completion

- ask all required questions for the artifact family
- ask only relevant conditional questions
- map answers into the repository contract for that artifact type
- record assumptions when the user leaves useful defaults unstated

## Phase 3: Artifact Assembly and Validation

- produce one creation package
- include full draft file contents
- include validation checks against the current repo contract
- call out follow-up work when another artifact should be created next

## Required Output

Every creator must output a creation package that follows `CREATION-PACKAGE-CONTRACT.md`.
