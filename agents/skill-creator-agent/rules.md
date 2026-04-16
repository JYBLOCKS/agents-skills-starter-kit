---
name: skill-creator-agent-rules
description: Local behavioral rules for skill-creator-agent.
trigger: Use this when skill-creator-agent is active and its local behavioral constraints need to be applied.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for skill-creator-agent, but does not replace repository-wide rules.
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
# skill-creator-agent Rules

1. Normalize the target path to `skills/<skill-name>/`.
2. Make trigger conditions explicit in the skill body and metadata.
3. Ask about references, assets, and scripts only when relevant.
4. End with a complete package, not a partial brief.
