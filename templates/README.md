---
name: templates
description: Catalog and usage guidance for starter kit templates.
trigger: Use this when browsing the available Templates resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Templates, but does not replace the canonical documents it references.
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
# Templates

Use these templates when adding new repository assets:

- `agent/`: starter package for a new agent
- `skill/`: starter package for a new skill
- `spec/spec.md`: starter spec document
- `tool-adapter.md`: starter adapter document

## Minimal Template Flow

Use these directly for the starter's happy path.

Templates are intentionally small. Extend them only when a recurring pattern proves necessary.

For guided artifact generation, see [creators/README.md](../creators/README.md).
