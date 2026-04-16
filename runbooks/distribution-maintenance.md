---
name: distribution-maintenance
description: Repeatable workflow document for Distribution Maintenance.
trigger: Use this when you need the repeatable workflow documented in Distribution Maintenance.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for Distribution Maintenance, but does not replace underlying contracts or repository rules.
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
# Distribution Maintenance

Use this runbook when updating install flows, wrapper artifacts, or public package metadata.

## Update Version

1. Bump `package.json`.
2. Update the version in `distribution/manifest.json`.
3. Update the version in `gemini-extension.json`.
4. Update the version in `plugins/ai-starter-kit/.codex-plugin/plugin.json`.

## Update Public Install Surface

1. Add or update the host adapter folder in `adapters/`.
2. Update `distribution/manifest.json`.
3. Update `README.md` install tables and verification steps.
4. Keep the neutral core referenced instead of duplicated when possible.

## Validate

1. Run `npm run validate:distribution`.
2. Run `npx skills add . -l`.
3. Re-check any host-specific native wrapper touched by the change.

## Add a New Host

1. Start from `adapters/generic/`.
2. Document discovery model, mapping, and minimum setup.
3. Add the host to `distribution/manifest.json`.
4. Update `README.md` only after the install path is backed by a real artifact or a verified CLI flow.
