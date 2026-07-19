@AGENTS.md

## Workflow

- Before editing, inspect the relevant route, feature, shared components, configuration, and neighboring files
- Do not guess the existing architecture from filenames alone
- Prefer editing existing files over creating parallel replacements
- Do not silently ignore lint, build, or TypeScript errors
- When a command fails, investigate the failure instead of immediately suppressing it
- Do not commit, push, merge, or rewrite Git history unless explicitly asked

At the end of a coding task, report:

1. What changed
2. Which important files changed
3. Which validation commands were run
4. Any remaining limitations, risks, or unverified behavior

Keep the report concise and do not claim success for checks that were not run.
