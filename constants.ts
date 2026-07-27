import { ProductData } from './types';

const GITHUB = 'https://github.com/OrionArchitekton/rekindle';
const CHALLENGE = 'https://dev.to/challenges/weekend-2026-07-09';

/**
 * Single source of truth for the Rekindle microsite.
 *
 * Every claim here is GROUNDED in the project README: the three outputs, the
 * model and its settings, and the voice pipeline. No adoption, accuracy, or
 * placement figure appears, because the repo supports none.
 */
export const PRODUCT_DATA: ProductData = {
  name: 'Rekindle',
  tagline: 'Your abandoned side project misses you.',
  credibility:
    'Paste a dormant GitHub repo and get an honest diagnosis, a plan, and a cornerman speech · TypeScript · built for the DEV Weekend Challenge: Passion Edition.',
  canonical: 'https://www.danmercede.com/works/rekindle/',
  metaDescription:
    'Rekindle reads a dormant GitHub repo, diagnoses why the flame died from its commit cadence, gives you three steps starting with one you can do tonight, and speaks a 90-second cornerman hype speech about your project by name.',

  problem: {
    heading: 'The problem',
    body:
      'Every developer has a side project whose flame went quiet. The repo is still there, the README still describes something you believed in, and the gap between that ambition and the last commit is exactly the thing nobody wants to look at directly. So it stays dormant.',
  },

  whatItDoes: {
    heading: 'What it does',
    body:
      'Paste a dormant GitHub repo. Rekindle reads its README, recent commits, and top-level files, then delivers three things: a diagnosis of why the flame died, read honestly from the commit cadence and the gap between README ambition and reality; a rekindle plan of three steps, the first small enough to finish in under fifteen minutes tonight; and a corner speech, roughly ninety words about your project by name, spoken out loud like a cornerman between rounds.',
  },

  cta: {
    primaryLabel: 'View on GitHub',
    primaryUrl: GITHUB,
    secondaryLabel: 'The challenge it was built for',
    secondaryUrl: CHALLENGE,
  },

  quickstart: {
    heading: 'Run it locally',
    intro: 'Two API keys and one command. The voice override is optional.',
    blocks: [
      {
        title: 'Clone, configure, run',
        note: 'Needs GEMINI_API_KEY and ELEVENLABS_API_KEY',
        command:
          'git clone https://github.com/OrionArchitekton/rekindle.git\ncd rekindle\npnpm install\ncp .env.example .env.local\npnpm dev',
      },
    ],
  },

  commands: [
    {
      name: 'diagnosis',
      description:
        'Why the flame died, read from the commit cadence and the distance between what the README promised and what shipped.',
    },
    {
      name: 'plan',
      description:
        'Three steps back to momentum, where the first is deliberately small enough to do in under fifteen minutes tonight.',
    },
    {
      name: 'speech',
      description:
        'Roughly ninety words about your project by name, voiced out loud, in the register of a cornerman between rounds.',
    },
  ],

  demo: {
    heading: 'How it works',
    intro:
      'A repo snapshot goes in, strict JSON comes back, and the speech is voiced. The model runs at temperature 0 with thinking disabled, and its output is defensively parsed and clamped server-side rather than trusted.',
    lines: [
      { kind: 'command', text: 'paste a GitHub URL' },
      { kind: 'output', text: 'GitHub API: README, recent commits, top-level tree' },
      { kind: 'output', text: 'Gemini 2.5 Flash: temperature 0, JSON output, thinking disabled' },
      { kind: 'output', text: 'parsed and clamped server-side, never trusted raw' },
      { kind: 'output', text: 'ElevenLabs eleven_multilingual_v2: the speech, out loud', tone: 'ok' },
    ],
  },

  differentiators: {
    heading: 'Why this is different',
    points: [
      {
        title: 'It reads the cadence, not the pitch',
        body:
          'The diagnosis comes from commit history and the gap between README ambition and what actually exists, which is where the real story of an abandoned project lives.',
      },
      {
        title: 'The first step is deliberately tiny',
        body:
          'A plan whose first move takes an evening is a plan you might actually start. Fifteen minutes is the constraint, not an aspiration.',
      },
      {
        title: 'Spoken, not printed',
        body:
          'The speech is voiced rather than rendered as text. Hearing something said about your own project by name lands differently than reading it.',
      },
      {
        title: 'Model output is clamped, not trusted',
        body:
          'The model runs at temperature 0 with thinking disabled and strict JSON output, and the server parses defensively and clamps the result rather than rendering whatever comes back.',
      },
    ],
  },

  links: [
    { label: 'GitHub repository', url: GITHUB, primary: true },
    { label: 'DEV Weekend Challenge: Passion Edition', url: CHALLENGE },
    { label: 'More work by Dan Mercede', url: 'https://www.danmercede.com/works/' },
  ],

  footerNote:
    'Built for the DEV Weekend Challenge: Passion Edition, because every developer has one project whose flame went quiet.',
};
