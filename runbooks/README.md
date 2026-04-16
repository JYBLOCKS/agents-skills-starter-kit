---
name: runbooks
description: Catalog and usage guidance for repository runbooks.
trigger: Use this when browsing the available Runbooks resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Runbooks, but does not replace the canonical documents it references.
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
# Runbooks

Runbooks are repeatable workflows for operating the repository.

Start with:

- `new-project-bootstrap.md`
- `new-agent.md`
- `new-skill.md`
- `new-tool-adapter.md`
- `distribution-maintenance.md`
- `spec-lifecycle.md`
- `end-to-end-example.md`

Creator runbooks live alongside the main runbooks under `runbooks/`.
