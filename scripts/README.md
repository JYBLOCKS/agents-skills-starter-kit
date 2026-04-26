---
name: scripts
description: Repository automation scripts for metadata, formatting recovery, and validation.
trigger: Use this when running or maintaining repository maintenance and validation scripts.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for script entry points, but does not replace contracts validated by those scripts.
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
# Scripts

This folder contains maintenance and validation automation for repository contracts and docs quality.

## Scripts

- `add-metadata-frontmatter.mjs`: add or check metadata frontmatter in markdown contracts
- `reflow-collapsed-docs.mjs`: recover malformed markdown structure when docs collapse
- `validate-distribution.mjs`: verify distribution manifest, wrappers, exports, and install path consistency
- `validate-tool-refs.js`: verify `tools:` references resolve to `shared/tool-permissions.md`
- `validate-docs.mjs`: verify docs English markers, internal links, and required top-level README coverage

## Usage

Run from repository root using npm scripts in `package.json`.

## Related Contracts

- `AGENTS.md`
- `distribution/CONTRACT.md`
- `rules/global-rules.md`
