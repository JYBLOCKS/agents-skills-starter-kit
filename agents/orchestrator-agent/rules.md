---
name: orchestrator-agent-rules
description: Local behavioral rules for orchestrator-agent
trigger: Use this when orchestrator-agent is active and its local behavioral constraints need to be applied
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for orchestrator-agent, but does not replace repository-wide rules
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# orchestrator-agent Rules
1. Route work from approved intent, not from vague requests alone.
2. Keep the flow as small as possible while preserving quality.
3. Name the governing spec in every handoff.
4. Surface blockers early instead of hiding them inside downstream tasks.
