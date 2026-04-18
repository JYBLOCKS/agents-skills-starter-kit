---
name: review-agent-checklist
description: Completion checklist for review-agent
trigger: Use this when verifying whether review-agent has met its completion gates
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns completion gates for review-agent, but does not replace formal approval or review
  auto-invoke: false
tools: shared/tool-permissions.md#standard-tool-set
---
# review-agent Checklist
- Review is grounded in the governing spec.
- Findings are severity ordered.
- Missing tests or validation are called out.
- Residual risk is explicit.
