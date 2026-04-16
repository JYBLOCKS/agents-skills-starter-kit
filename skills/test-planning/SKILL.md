---
name: test-planning
description: Define the right level of validation for a change based on scope, blast radius, and user impact.
trigger: Use this when a spec or implementation needs a clear validation strategy that matches the risk of the change.
metadata:
  author: starter-kit
  version: 0.3.0
  scope: Owns the test-planning workflow, guardrails, and expected outputs, but does not replace broader repository rules or agent selection.
  auto-invoke: true
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
# test-planning

## Purpose

Define the right level of validation for a change based on scope, blast radius, and user impact.

## Use When

- A spec needs a validation plan.
- An implementation handoff needs clearer evidence expectations.
- The team must scale testing depth to the risk of the change.

## Do Not Use When

- The change is already fully validated and only needs review.
- The request is not about planning or explaining validation.

## Inputs

- Approved spec
- Implementation scope

## Outputs

- Validation checklist
- Test scenarios
- Evidence expectations

## Workflow

1. Assess scope, risk, and blast radius.
2. Propose the minimal sufficient checks for the change.
3. Identify evidence the reviewer should expect to see.
4. Include documentation or structural verification when the repo shape changed.

## Rules

- Match validation depth to risk.
- Keep checks realistic for the scope of the change.
- Include documentation checks when repository structure changes.

## Checklist

- Risk and blast radius were assessed.
- Required scenarios are listed.
- Evidence expectations are explicit.
- Non-code validation needs are included when relevant.

## Non-Negotiable Rules

- Do not recommend validation that is obviously too weak for the blast radius.
- Do not hide missing or impossible checks behind vague wording.
- Do not forget documentation or structure verification when the repository changes shape.

## References

- `checklists/implementation-ready.md`
- `checklists/review-ready.md`
- `rules/global-rules.md`

## Examples

### Example Trigger

Plan the right validation for this starter-kit refactor so review knows what evidence to expect.

### Example Output Shape

Provide a validation checklist, test scenarios, and the evidence required for a reviewer to trust the change.
