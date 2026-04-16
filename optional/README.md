---
name: optional
description: Overview of optional creator modules and advanced extensions.
trigger: Use this when browsing the available Optional resources in the repository.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns discoverability for Optional, but does not replace the canonical documents it references.
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
# Optional Modules

This folder holds advanced modules that are useful, but not part of the minimal starter path.

It is still part of the canonical installable package and should not be treated as out-of-band content. Skills authored here are included in the default installable skill catalog through mirrors in `skills/`.

## Included Optional Areas

- `agents/`: creator agents for guided artifact generation
- `skills/`: creator skills, supporting creator utilities, and non-core workflow/domain skills
- `creators/`: creator contracts, questionnaires, templates, and ownership matrix for the optional module
- `runbooks/`: creator-specific runbooks

## When To Use This

Use the optional module when you want the repository to guide artifact creation instead of manually editing templates.

For the core starter flow, return to [../AGENTS.md](../AGENTS.md).
