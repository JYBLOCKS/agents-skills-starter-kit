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

1. SDD orchestrator starts from user story and opens SDD package.
2. Business and spec agents refine intent into an implementation-ready contract.
3. SDD flow applies sequencing and execution gates, delegating orchestration only when needed.
4. Implementation agent executes against the approved SDD package.
5. Review agent validates scope, risk, and evidence.
6. Docs agent syncs artifacts and release notes.
7. Human happy-path signoff closes the SDD lifecycle.
