---
name: adapters-contract
description: Canonical contract for adapter packages in the starter kit.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Adapters Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Adapters Contract, but does not replace the concrete artifacts that implement them.
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
# Adapter Contract

Every adapter should document:

- Discovery model
- Naming conventions
- Prompt mapping
- Rule mapping
- Context mapping
- Skill mapping
- What is referenced directly
- What is copied or transformed
- Minimum setup steps

Adapters should preserve the neutral core as the source of truth.
When an adapter documents install-time skill discovery, it should point at the unified install surface rather than only one source folder.
