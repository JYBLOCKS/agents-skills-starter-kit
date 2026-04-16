---
name: tool-adapter-template
description: Starter template for creating a new tool adapter.
trigger: Use this when creating or updating artifacts that should follow the Tool Adapter template.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the starter structure for Tool Adapter, but does not replace approved repository-specific decisions.
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
# Tool Adapter Template

## Purpose

Describe how this tool consumes the neutral core.

## Discovery Model

- How it finds agents
- How it finds skills
- How it loads rules and context

## Mapping

- Shared files referenced directly
- Files copied into tool-specific locations
- Known tool-specific overrides

## Minimum Setup

1. Step one
2. Step two
3. Step three

## Notes

- Limitations
- Future improvements
