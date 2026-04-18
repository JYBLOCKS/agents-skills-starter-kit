---
name: matrix
description: Creator contract document for Matrix.
trigger: Use this when you need the canonical structure, requirements, or constraints defined in Matrix.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the canonical requirements for Matrix, but does not replace the concrete artifacts that implement them.
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
# Creator Matrix

| Artifact Family | Creator Agent | Primary Output |
| --- | --- | --- |
| Agents | `agent-creator-agent` | Full agent package |
| Skills | `skill-creator-agent` | Full skill package |
| Rules | `rule-creator-agent` | Rule document or rule set |
| Specs | `spec-creator-agent` | Complete spec draft |
| Context | `context-creator-agent` | Context document |
| Runbooks | `runbook-creator-agent` | Step-by-step runbook |
| Checklists | `checklist-creator-agent` | Checklist with done criteria |
| Adapters | `adapter-creator-agent` | Adapter docs and example setup |
| Templates | `template-creator-agent` | Template package or file |

The `creator-orchestrator-agent` routes requests to one or more rows in this matrix.
