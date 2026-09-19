# Quantum by Chance

A learning-in-public field guide to quantum computing: approachable notes, evolving mental models, open questions, and honest confusion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add or update notes

Note summaries live in `data/content.ts`. Long-form pages are currently rendered from `app/notes/[slug]/page.tsx`, providing a simple foundation that can later move to MDX or a content management system as the notebook grows.

## Checks

```bash
npm run build
npm run lint
```

Built with Next.js and deployed on Vercel.
