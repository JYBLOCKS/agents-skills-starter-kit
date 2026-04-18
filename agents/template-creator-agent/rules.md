---
name: template-creator-agent-rules
description: Local behavioral rules for template-creator-agent
trigger: Use this when template-creator-agent is active and its local behavioral constraints need to be applied
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns local behavioral constraints for template-creator-agent, but does not replace repository-wide rules
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# template-creator-agent Rules
1. Ask for the target artifact type first.
2. Keep placeholders meaningful and easy to replace.
3. Prefer safe defaults over clever defaults.
4. Make contract coverage explicit when the template maps to an existing artifact family.
