# Templates

Use these templates when adding new repository assets:

- `agent/`: starter package for a new agent
- `skill/`: starter package for a new skill
- `spec/spec.md`: starter spec document
- `tool-adapter.md`: starter adapter document

## Creator Ownership

Use [creators/matrix.md](E:/projects/IN-PROGRESS/agents-skills-starter-kit/creators/matrix.md) to see which creator agent and creator skill own each artifact family.

If the goal is guided artifact generation rather than manual copying:

- use `creator-orchestrator-agent` when the artifact family is unclear
- use the specialized creator agent for the target family
- use the matching creator skill plus questionnaire to produce a complete creation package

Templates are intentionally small. Extend them only when a recurring pattern proves necessary.
