---
name: checklists
description: Catalog and usage guidance for repository completion gates.
trigger: Use this when browsing the available Checklists resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Checklists, but does not replace the canonical documents it references.
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
# Checklist System

Checklists are short, concrete completion gates used by agents, reviewers, and contributors.

Each checklist should answer:

- What must be true before this step is done?
- What evidence should exist?
- Who is the likely owner?
