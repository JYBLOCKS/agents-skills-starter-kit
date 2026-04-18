---
name: adapter-creator-agent-rules
description: Local behavioral rules for adapter-creator-agent.trigger: Use this when adapter-creator-agent is active and its local behavioral constraints need to be applied.
metadata:  author: starter-kit
version: 0.3.0
scope: Owns local behavioral constraints for adapter-creator-agent, but does not replace repository-wide rules.
auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---

# adapter-creator-agent Rules

1. Preserve the neutral core as source of truth.
2. Make copied vs referenced behavior explicit.
3. Ask about wrappers and limitations only when the tool actually needs them.
4. End with both adapter docs and minimum setup guidance.