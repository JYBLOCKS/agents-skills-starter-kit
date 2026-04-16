---
name: sample-product-spec
description: Example specification document for Sample Product Spec.
trigger: Use this when you need a concrete example spec based on Sample Product Spec.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns an illustrative spec example for Sample Product Spec, but does not replace an approved project spec.
  auto-invoke: false
allowed-tools:
  - generic
  - openai
  - claude-code
  - opencode
  - cursor
  - windsurf
  - github-copilot
  - cline
  - gemini-cli
  - codex
---
# Sample Product Spec

## Problem

Teams want one repository pattern that works across multiple coding-agent tools without rewriting all their prompts and rules.

## Goals

- Define a neutral core for agents, skills, rules, and context.
- Provide adapters for major coding tools.
- Make the starter easy to copy and extend.

## Non-Goals

- Shipping a full execution runtime
- Solving every vendor-specific feature

## Constraints

- Human-editable files only
- English-first documentation

## Decisions

- Markdown for narrative contracts
- YAML metadata for skills
- Adapter-per-tool layout

## Interfaces or Outputs

- Canonical agent packages
- Skill packages with metadata
- Tool adapter docs

## Acceptance Criteria

- README matches the repository structure.
- New contributors can add an agent or skill from templates.

## Test or Validation Plan

- Verify all starter artifacts exist.
- Walk the sample end-to-end flow.
