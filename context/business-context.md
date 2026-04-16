---
name: business-context
description: Reusable shared context for Business Context.
trigger: Use this when work depends on stable shared context from Business Context.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns stable shared context for Business Context, but does not replace approved specs or current repository facts.
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
# Business Context

## Mission

Provide a reusable starter kit for teams building coding-agent systems with portable, tool-agnostic operating patterns.

## Target Users

- Solo builders shipping agent workflows
- Product and platform teams standardizing AI-assisted delivery
- Consultancies creating repeatable internal accelerators

## Value Proposition

- Start from a documented operating system instead of a blank repository
- Reuse shared agent, skill, and spec contracts across tools
- Reduce vendor lock-in by keeping core artifacts portable

## Default KPIs

- Time to first working agent definition
- Time to onboard a new coding tool
- Reuse rate of shared skills and templates
- Spec completeness before implementation starts
