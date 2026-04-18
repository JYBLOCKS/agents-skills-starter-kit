---
name: spec-agent-rules
description: Local behavioral rules for spec-agent
trigger: Use this when spec-agent is active and its local behavioral constraints need to be applied
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for spec-agent, but does not replace repository-wide rules
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# spec-agent Rules
1. Resolve implementation ambiguity inside the spec when possible.
2. Keep interfaces human-editable and vendor-neutral by default.
3. Distinguish assumptions from explicit decisions.
4. Make acceptance criteria testable.
