# South China Sea Disputes

Static research portal on the legal, policy, and geopolitical issues concerning the South China Sea disputes.

## Local commands

Use the bundled Node/pnpm runtime in this Codex environment:

```bash
PATH="/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH" pnpm install
PATH="/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH" pnpm validate
PATH="/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH" pnpm check
PATH="/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH" pnpm build
```

## Content model

The searchable source library lives in `src/data/sources.json`. Each record includes:

`id`, `title`, `authors`, `year`, `sourceType`, `issuer`, `claimants`, `topics`, `jurisdiction`, `url`, `summary`, `primarySource`, and `accessed`.

Run `pnpm validate` after source updates.

## Deployment

The site deploys to GitHub Pages from `main` through `.github/workflows/deploy.yml`.
