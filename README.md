# Multi-Tool Agent Skills Starter Kit

Canonical narrative source: [AGENTS.md](AGENTS.md).

## Single Entry

Use exactly one public workflow entrypoint:

1. [agents/orchestrator.md](agents/orchestrator.md)
2. [runbooks/sdd-flow.md](runbooks/sdd-flow.md)

Canonical delivery path:
`orchestrator -> discovery -> spec -> delegated execution -> validate -> caveman summary`

## Quick Links

- Governance: [AGENTS.md](AGENTS.md)
- Entry agent: [agents/orchestrator.md](agents/orchestrator.md)
- Operational runbook: [runbooks/sdd-flow.md](runbooks/sdd-flow.md)
- Spec contract: [specs/CONTRACT.md](specs/CONTRACT.md)
- SDD checklist: [checklists/sdd-delivery-ready.md](checklists/sdd-delivery-ready.md)

## Validation

```bash
npm run validate:agents-structure
npm run validate:sdd
npm run validate:docs
npm run validate
```

Note: full `validate` may fail on known pre-existing `./adapters` distribution surface unless that scope is restored.
