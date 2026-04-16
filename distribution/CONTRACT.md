---
name: distribution-contract
description: Contract for public installation flows and distribution metadata.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Distribution Contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Distribution Contract, but does not replace the concrete artifacts that implement them.
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
# Distribution Contract

The starter ships one canonical repository package and optional host wrappers.

## Required Metadata

- Canonical package id
- Visible install name
- Semantic version
- Short description
- Supported hosts
- Source-of-truth folders
- Exported agents, skills, and adapters
- Native wrapper artifacts

## Required Guarantees

1. The neutral core remains the source of truth.
2. Host wrappers may reference the core directly, but they must not fork prompts, rules, or shared context unless the host requires a thin wrapper.
3. Every install path documented in `README.md` must be backed by an artifact or a verified CLI flow in the repository.
4. Distribution metadata must be machine-validatable.

## Required Validation

- Every exported path exists.
- The install-facing skills export matches the unified skills root under `skills/`.
- Skills authored under `optional/skills/` are mirrored into `skills/` for installer discovery.
- The package version matches the distribution manifest, Gemini extension, and Codex plugin manifest.
- Native wrapper files exist for the documented hosts.
- `README.md` includes only supported install commands.
