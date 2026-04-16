---
name: skill-rules
description: Shared rule document for Skill Rules.
trigger: Use this when shared operating constraints from Skill Rules must govern the work.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns shared operating constraints in Skill Rules, but does not replace task-specific agent or skill guidance.
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
# Skill Rules

1. Skills should do one thing well.
2. Triggers, inputs, and outputs must be explicit.
3. Workflow and checklist steps should be concrete enough to execute.
4. Every shipped skill must include non-negotiable rules that always apply.
5. Tool-specific instructions belong in adapter overrides or references, not the core skill.
6. If a skill needs examples, keep them inline in `SKILL.md` instead of separate `examples/` folders.
