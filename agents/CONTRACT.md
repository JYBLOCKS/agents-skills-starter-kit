---
name: agents-contract
description: Canonical contract for agent packages in the starter kit.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Agents Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Agents Contract, but does not replace the concrete artifacts that implement them.
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
# Agent Contract

Every agent package should define:

- Identity
- Mission
- Scope
- Trigger Conditions
- Decision Boundaries
- Inputs
- Outputs
- Dependencies
- Required Context
- Supported Skills
- Runbook Links
- Checklist Link

The agent should also include a starter prompt, a handoff template, and at least one example invocation.
