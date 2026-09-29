# rekindle-site

Vite/React microsite for the `Rekindle` project page at
`https://www.danmercede.com/works/rekindle/`.

## Role

This repo owns the marketing/presentation surface for `Rekindle` (paste a
dormant GitHub repo and get a diagnosis, a three-step plan, and a spoken
cornerman speech; built for the DEV Weekend Challenge: Passion Edition):
layout, copy, metadata, static assets, and Vercel cache config. The source
project owns the app itself: the GitHub repo reader, the Gemini prompt and its
server-side parsing and clamping, the ElevenLabs voice pipeline, and tests.

## Source Of Truth

- Product repo: github.com/OrionArchitekton/rekindle
- Site copy: `constants.ts` (`PRODUCT_DATA`)
- Metadata: `index.html`
- Cache headers: `vercel.json`

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Build And Deploy

- `vite.config.ts` sets `base: '/works/rekindle/'` so emitted asset URLs
  resolve under the hub path.
- The danmercede.com hub (`danmercede-com` repo, `vercel.json`) rewrites
  `/works/rekindle/` to this project's Vercel deployment,
  `rekindle-site-ten.vercel.app`.
- `vite-plugin-bodybake.ts` bakes a static, crawlable HTML body from
  `PRODUCT_DATA` into `#root` at build time, for answer-engine crawlers that
  do not run JavaScript. React replaces it on mount. The build fails if the
  baked body lacks an `<h1>` or `<p>`, or if the `#root` anchor is missing.

## Boundaries

Keep claims grounded in the source project README and verified behavior. The
page states no adoption, accuracy, or placement figure because the repo
supports none; keep it that way until the repo does. Do not change the app
from this repo.
