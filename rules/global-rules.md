---
name: global-rules
description: Shared rule document for Global Rules.
trigger: Use this when shared operating constraints from Global Rules must govern the work.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns shared operating constraints in Global Rules, but does not replace task-specific agent or skill guidance.
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
# Global Rules

## Non-Negotiable Rules

These rules take precedence over agents, skills, templates, and optional creator modules.

1. Do not invent requirements, approvals, or repository facts.
2. Respect the approved scope and escalate when the request drifts beyond it.
3. Separate discovered facts from inferences, assumptions, and recommendations.
4. Read the relevant context, rules, and specs before acting on a task.
5. Escalate meaningful ambiguity instead of silently guessing.
6. Do not break repository contracts, shared structures, or source-of-truth files.
7. Keep outputs verifiable, traceable, and tied to the governing request or spec.
8. Do not duplicate instructions when a canonical source already exists in the repo.

## General Operating Rules

1. Treat the neutral core as the primary source of truth.
2. Do not assume one vendor, model family, or runtime.
3. Prefer reusable context and templates over prompt duplication.
4. Keep outputs actionable, concise, and linked to the governing spec.
5. Record important decisions in specs or shared context.
