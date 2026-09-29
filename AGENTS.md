# AGENTS.md - rekindle-site

## Repo Role

`rekindle-site` is the Vite/React microsite for the `Rekindle` project page at
danmercede.com/works/rekindle/. It owns presentation, metadata, static assets,
and cache config for the site surface.

## Boundaries

- Owns site copy, layout, Open Graph metadata, Vercel config, and static assets.
- Does not own the Rekindle app: the GitHub repo reader, Gemini prompt and
  parsing, ElevenLabs voice pipeline, or tests
  (github.com/OrionArchitekton/rekindle).
- Keep product claims grounded in the source project README and verified
  behavior. State no adoption, accuracy, or placement figure the repo does not
  support.
- `constants.ts` (`PRODUCT_DATA`) feeds both the React app and the build-time
  body-bake; edit copy there. Keep `base` in `vite.config.ts` equal to
  `/works/rekindle/` so it matches the hub rewrite.

## Authority Order

1. `/home/orion/src/orion-estate/platform/orion-estate-audit/AGENTS.md`
2. Source project: the `rekindle` repo README.md and docs/
3. This repo's `README.md`, `constants.ts`, `index.html`, and `vercel.json`
4. Vite build output and package scripts

## Validation

```bash
npm install
npm run build
```

For docs-only changes, run `git diff --check` at minimum.
