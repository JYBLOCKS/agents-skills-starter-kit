---
name: adapter-generation
description: guide and workflow for adapter-generation.trigger: Use this when adapter-generation is the right reusable capability for the task and you want its workflow, rules, and output shape applied consistently.
metadata:  author: starter-kit  version: 0.3.0  scope: Owns the adapter-generation workflow and expected outputs; complements broader repository rules and agent selection.  auto-invoke: true
tools: shared/tool-permissions.md#standard-tool-set
---
# adapter-generation
## PurposeCreate or extend a tool adapter that maps the neutral repository core into a specific coding assistant's conventions.
## Supported Tools- generic- openai- claude-code- opencode- cursor- windsurf- aider
## Inputs- target tool- neutral core contracts- tool-specific constraints
## Outputs- adapter outline- mapping notes- setup instructions
## Guardrails- Preserve the neutral core as source of truth.- Document what is copied versus referenced.
## Process1. Understand the tool's discovery model.2. Map prompts, rules, context, and skills.3. Write minimal setup and extension guidance.
## Adapter Notes- generic: use `templates/tool-adapter.md` as the base.