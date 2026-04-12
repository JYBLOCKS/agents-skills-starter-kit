# context-creation

## Purpose

Guide the creation of reusable context documents with clear ownership, consumers, durability, and freshness expectations.

## Supported Tools

- generic
- openai
- claude-code
- opencode

## Inputs

- context request
- `optional/creators/questionnaires/context.yaml`
- `context/README.md`

## Outputs

- context creation package
- drafted context content
- validation checklist

## Guardrails

- Preserve only reusable information.
- Ask about source decisions and freshness only when relevant.
- Keep intended consumers explicit.

## Process

1. Run intake and normalize the context path.
2. Collect required context fields and any conditional freshness/source data.
3. Draft the document and validate it.

## Adapter Notes

- generic: prefer durable facts over transient notes.
