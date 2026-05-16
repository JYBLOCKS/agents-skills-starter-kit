---
name: agent-template
description: Starter template for a flat agent file.
trigger: Use this when creating a new flat agent contract.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the starter structure for flat agent files.
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
# Agent: <Name>

## Purpose

Describe the agent mission.

## Responsibilities

- Responsibility 1
- Responsibility 2

## Inputs Required

- Input 1

## Outputs

- Output 1

## Delegation Rules

This agent can delegate to:

- orchestrator.md

## Skills Used

- skill-name.md

## Quality Gates

- Spec updated.
- Tests defined.
- Risks documented.
- Caveman output when detail is not requested.

## Response Style

Default: caveman mode.
