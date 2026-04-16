---
name: distribution
description: Overview of the starter kit distribution surface and source-of-truth mapping.
trigger: Use this when you need the canonical distribution surface, export map, or installation metadata for the starter kit.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the distribution surface and source-of-truth mapping, but does not replace the canonical repository content.
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
# Distribution

This folder defines the starter kit's installable surface area.

## Files

- `manifest.json`: canonical package metadata and export map
- `CONTRACT.md`: rules for public installation flows and wrapper maintenance

## Source of Truth

The repository root content remains canonical:

- `agents/`
- `skills/`
- `context/`
- `rules/`
- `checklists/`
- `runbooks/`
- `specs/`
- `creators/`
- `templates/`
- `adapters/`

## Unified Install Surface

- `skills/`: install-facing discovery root for all selectable skills
- `agents/`: canonical home for all agent packages, including creator agents
- `creators/`: shared creator contracts, questionnaires, and templates

Distribution metadata points at the canonical repository folders and validates that host wrappers resolve the shared install surface back to them.
