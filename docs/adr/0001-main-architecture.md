# ADR 0001: Flat Agent And Skills Architecture

## Status
Accepted

## Context
The repository previously used package folders such as `agents/name.md` and `skills/name.md`. The approved operating model requires flat Markdown files with no per-agent or per-skill folders.

## Decision
Use `agents/*.md` and `skills/*.md` as the canonical source of truth. Validators, docs, runbooks, and distribution exports must reference flat files.

## Consequences
- Agent and skill discovery is simpler.
- Link maintenance is less nested.
- Existing package-folder references must be migrated.
- Distribution validation may still need adapter restoration in a separate scope.
