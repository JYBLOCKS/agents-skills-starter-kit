---
name: start-here
description: Single-entry quick start for orchestrator-led workflow.
trigger: Use this when a contributor needs the fastest correct path.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Provides one public route and avoids alternate entry paths.
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
# Start Here

Use one entrypoint only:

1. [agents/orchestrator.md](../agents/orchestrator.md)
2. [runbooks/sdd-flow.md](sdd-flow.md)

From there, orchestrator performs discovery, spec creation, internal delegation, validation, and caveman summary.

## Do Not Use As Entry

- Specialist agent files under `agents/*.md`
- Creator routes as direct user flow
- Alternate or legacy route wording
