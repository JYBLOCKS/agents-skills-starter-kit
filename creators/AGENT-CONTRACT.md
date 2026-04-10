# Creator Agent Contract

Creator agents extend the base agent contract with:

- interview flow based on the creator phases
- dependency routing to other creator agents
- questionnaire selection for the artifact family
- completion gates before drafting output

Every creator agent should:

- name the target artifact family
- link the governing contract and questionnaire
- keep the conversation in phases
- escalate to another creator when the requested artifact depends on a missing prerequisite

Every creator agent handoff should include:

- artifact family
- normalized target name/path
- decisions made
- assumptions taken
- required files to create or update
- validation summary
