---
name: plugins
description: Catalog and usage guidance for native local host wrappers.
trigger: Use this when browsing plugin wrappers that expose the starter kit in host-native formats.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for plugin wrappers, but does not replace canonical repository contracts.
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
# Plugins

This folder contains host-native plugin wrappers that point back to the canonical repository contracts.

## Purpose

- provide native installation for hosts that support local plugins
- keep wrapper metadata aligned with `distribution/manifest.json`
- avoid duplicating core contracts inside host wrappers

## Current Wrapper

- `ai-starter-kit/`: Codex plugin wrapper

## Source Of Truth

Plugin wrappers must resolve to canonical repository folders:

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

## Related Files

- `plugins/ai-starter-kit/.codex-plugin/plugin.json`
- `.agents/plugins/marketplace.json`
- `distribution/manifest.json`
- `distribution/CONTRACT.md`
