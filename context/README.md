# Context System

This folder holds reusable context for every agent, skill, and adapter.

## Files

- `business-context.md`: mission, users, value, KPIs, constraints
- `product-context.md`: product scope, active bets, priorities, acceptance language
- `technical-context.md`: architecture, standards, interfaces, dependencies
- `repo-context.md`: repository layout, ownership, workflows, naming
- `delivery-context.md`: lifecycle, review expectations, release readiness

## Rules

- Keep context stable and reusable.
- Put decisions here when multiple agents need them.
- Do not duplicate context inside individual agents unless the local override is intentional.
- Link to source specs when context is derived from a formal decision.
