# Create With Creators

1. Start with `agents/creator-orchestrator-agent/` when the artifact family is unclear.
2. Route to the specialized creator agent for the target artifact family.
3. Load the matching creator skill and questionnaire from `creators/questionnaires/`.
4. Run the conversation in three phases:
   - intent and use case
   - contract completion and missing decisions
   - artifact assembly and validation summary
5. Return one final creation package that follows `creators/CREATION-PACKAGE-CONTRACT.md`.
6. If a dependency artifact is missing, route to the next creator before finalizing.
