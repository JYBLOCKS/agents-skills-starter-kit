# Skill Contract

Every skill package is centered on a single `SKILL.md` file.

The top of `SKILL.md` should include a structured metadata block with:

- `name`
- `description`
- `trigger`
- `metadata.author`
- `metadata.version`
- `metadata.scope`
- `metadata.auto-invoke`
- `allowed-tools`

The body of `SKILL.md` should define:

- Purpose
- Use When
- Do Not Use When
- Inputs
- Outputs
- Workflow
- Rules
- Checklist
- Non-Negotiable Rules
- References
- Examples

Optional assets or scripts may live alongside `SKILL.md` when the skill genuinely needs them.

Tool-specific behavior should be expressed as adapter notes or references instead of replacing the neutral core contract.
