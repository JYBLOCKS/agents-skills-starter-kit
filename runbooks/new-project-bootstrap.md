---
name: new-project-bootstrap
description: Repeatable workflow document for New Project Bootstrap.
trigger: Use this when you need the repeatable workflow documented in New Project Bootstrap.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for New Project Bootstrap, but does not replace underlying contracts or repository rules.
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
# New Project Bootstrap

1. Copy the repository or chosen templates into a new workspace.
2. Fill in the shared context files for the project.
3. Confirm the default rules and adapt only what truly differs.
4. Create or edit the first business spec.
5. Choose the adapter that matches the coding tool in use.
6. Run the end-to-end paper workflow before adding custom agents.
