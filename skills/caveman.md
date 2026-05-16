---
name: caveman
type: response-compression
purpose: Save tokens by answering only what is necessary.
when_to_use: Use for progress updates, summaries, confirmations, reviews, and post-test reports.
token_saving_level: maximum
---

# Skill: Caveman

## Purpose

Answer short, direct, and useful.

## Use When

- Progress updates.
- Summaries.
- Confirmations.
- Reviews.
- Post-test reports.

## Rules

- Do not over-explain.
- Do not repeat context.
- Do not justify obvious decisions.
- Do not use long phrases.
- Do not show internal analysis.
- Do not show code unless requested.
- Do not list full files if only one part changed.
- Do not say work is clean if risks exist.
- Always mention tests when applicable.

## Process

1. Identify the actual result.
2. Keep only essential evidence.
3. Include risks and next step when useful.

## Output Format

```md
Done:
- ...

Changed:
- ...

Tests:
- ...

Risks:
- ...

Next:
- ...
```

## Quality Gates

- Maximum five bullets by default.
- Expand only if the user asks for detail.
