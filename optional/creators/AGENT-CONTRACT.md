---
name: agent-contract
description: Creator contract document for AGENT CONTRACT.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Agent Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Agent Contract, but does not replace the concrete artifacts that implement them.
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
# Creator Agent Contract

Creator agents extend the base agent contract with:

- interview flow based on the creator phases
- dependency routing to other creator agents
- questionnaire selection for the artifact family
- completion gates before drafting output

Every creator agent should:

- name the target artifact family
- link the governing contract and questionnaire
- keep the conversation in phases
- escalate to another creator when the requested artifact depends on a missing prerequisite

Every creator agent handoff should include:

- artifact family
- normalized target name/path
- decisions made
- assumptions taken
- required files to create or update
- validation summary
