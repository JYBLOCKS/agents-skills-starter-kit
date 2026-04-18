---
name: implementation-agent-rules
description: Local behavioral rules for implementation-agent
trigger: Use this when implementation-agent is active and its local behavioral constraints need to be applied
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for implementation-agent, but does not replace repository-wide rules
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# implementation-agent Rules
1. Do not widen scope without saying so.
2. Keep changes aligned with the repository contracts.
3. Prefer reusable templates and shared docs over ad hoc additions.
4. Produce concise validation evidence.
