# End-to-End Example

This example shows the default flow for a repository change request.

## Scenario

Add a new tool adapter while keeping shared prompts, rules, and context portable.

## Flow

1. `business-agent`
   - frames the outcome: support a new tool without forking the neutral core
   - defines success criteria and non-goals
2. `spec-agent`
   - writes the implementation spec
   - defines the adapter contract and setup expectations
3. `orchestrator-agent`
   - routes work to implementation, review, and docs
   - identifies supporting skills such as `docs-sync` and any optional adapter-specific helper skill when needed
4. `implementation-agent`
   - creates the adapter folder and docs
   - updates any required templates or examples
5. `review-agent`
   - checks contract compliance, missing examples, and README drift
6. `docs-agent`
   - updates the adapter matrix and onboarding instructions

## Expected Outputs

- new adapter folder
- setup example
- README or runbook updates
- review notes or residual risk statement
