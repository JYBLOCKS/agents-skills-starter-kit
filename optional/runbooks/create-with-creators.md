---
name: create-with-creators
description: Optional creator workflow for Create With Creators.
trigger: Use this when you need the repeatable workflow documented in Create With Creators.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the repeatable workflow for Create With Creators, but does not replace underlying contracts or repository rules.
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
# Create With Creators

1. Start with `optional/agents/creator-orchestrator-agent/` when the artifact family is unclear.
2. Route to the specialized creator agent for the target artifact family.
3. Load the matching creator skill and questionnaire from `optional/creators/questionnaires/`.
4. Run the conversation in three phases:
   - intent and use case
   - contract completion and missing decisions
   - artifact assembly and validation summary
5. Return one final creation package that follows `optional/creators/CREATION-PACKAGE-CONTRACT.md`.
6. If a dependency artifact is missing, route to the next creator before finalizing.
