# Multi-Tool Agent Skills Starter Kit

Portable starter kit with one canonical workflow: orchestrator-led SDD delivery.

## Single Entry

Use exactly one public workflow entrypoint:

1. [agents/orchestrator.md](agents/orchestrator.md)
2. [runbooks/sdd-flow.md](runbooks/sdd-flow.md)

Everything else in `agents/`, `skills/`, and `creators/` is internal support for orchestrator delegation.

## Canonical Delivery Path

`orchestrator -> discovery -> spec -> delegated execution -> validate -> caveman summary`

## Repository Map

| Folder | Purpose |
| --- | --- |
| `agents/` | flat agent contracts, internal delegates included |
| `skills/` | flat reusable skills |
| `specs/` | required specs before implementation |
| `checklists/` | quality gates and done criteria |
| `runbooks/` | operational runbooks, anchored to the canonical path |
| `creators/` | internal creator system (orchestrator-delegated) |
| `rules/` | global and skill rules |
| `context/` | reusable context and logs |
| `distribution/` | manifest and export validation |
| `scripts/` | structural and workflow validators |

## Validation

```bash
npm run validate:agents-structure
npm run validate:sdd
npm run validate:docs
npm run validate
```

`npm run validate` may still fail on the known pre-existing `./adapters` distribution surface unless that scope is explicitly restored.

## Highest-Signal Files

- [AGENTS.md](AGENTS.md)
- [agents/orchestrator.md](agents/orchestrator.md)
- [runbooks/sdd-flow.md](runbooks/sdd-flow.md)
- [specs/agent-system.spec.md](specs/agent-system.spec.md)
