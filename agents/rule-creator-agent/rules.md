---
name: rule-creator-agent-rules
description: Local behavioral rules for rule-creator-agent
trigger: Use this when rule-creator-agent is active and its local behavioral constraints need to be applied
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for rule-creator-agent, but does not replace repository-wide rules
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# rule-creator-agent Rules
1. Keep rules behaviorally testable.
2. Make the audience and scope explicit.
3. Record precedence when the new rule might conflict with an existing one.
4. Use exclusions only when they materially change behavior.
