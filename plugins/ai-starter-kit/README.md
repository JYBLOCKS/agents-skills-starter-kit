---
name: ai-starter-kit
description: Plugin wrapper documentation for the AI starter kit.
trigger: Use this when installing or maintaining the local Codex plugin wrapper for the starter kit.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns Codex plugin wrapper guidance, but does not replace the neutral starter content in the repository root.
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
# AI starter kit Codex plugin

This plugin is a thin Codex wrapper around the repository root.

## Install

1. Clone this repository and keep the `plugins/ai-starter-kit` folder inside it.
2. Add the local plugin from `plugins/ai-starter-kit`.
3. Keep the repository structure intact so the plugin manifest can resolve `../../../skills/`.

## Why the plugin is thin

The neutral core lives in the repository root. The plugin points at the repository `skills/` surface instead of copying the starter content into a Codex-only package.
