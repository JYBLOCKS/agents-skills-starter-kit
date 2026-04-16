---
name: spec-lifecycle
description: Repeatable workflow document for Spec Lifecycle.
trigger: Use this when you need the repeatable workflow documented in Spec Lifecycle.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for Spec Lifecycle, but does not replace underlying contracts or repository rules.
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
# Spec Lifecycle

1. Business agent frames the problem and success metrics.
2. Spec agent converts intent into an implementation-ready spec.
3. Orchestrator chooses the execution path and dependencies.
4. Implementation agent executes against the approved spec.
5. Review agent validates scope, risk, and evidence.
6. Docs agent syncs artifacts and release notes.
