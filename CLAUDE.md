# test-drive

Study notes for the theory classes of a driving licence course. The owner pastes raw notes (text or notebook photos) after each class; the job is to organise them into lesson files. The site is deployed to Vercel so the owner can also search the notes from a phone if the exam allows it. The owner then recopies them by hand into a paper notebook, which is allowed in the exam, so the notes must be complete, ordered and easy to transcribe.

## Workflow when the owner sends notes

1. Read `src/content/lessons/` first to see the existing topics and lessons.
2. Each lesson is one Markdown file `src/content/lessons/NN-slug.md` with frontmatter `title`, `topic` and `order` (the order it was taught). Topics are grouped on the page in order of their first lesson; reuse the exact `topic` string to add to an existing topic.
3. Numbering ("Clase N") is automatic via CSS counters; never number by hand.
4. Anything the teacher said will be in the exam goes in a blockquote (`> question and answer`) inside the lesson where it was mentioned; it renders as "Pregunta de examen".
5. Run `pnpm lint:fix && pnpm build` before committing.
6. Commit after each update. Ask the owner before pushing to `origin main` (pushing deploys to Vercel).

## Content rules

- Notes content is written in Spanish; code, class names and commit messages in English.
- Clean up and order the notes, fix spelling, but do not invent facts. If something in the notes is unclear, incomplete or looks wrong, ask the owner or mark it visibly with `(?)` instead of guessing: these notes are used in a real exam.
- Prefer short lists, definitions and tables over long paragraphs, since everything is recopied by hand.

## Technical rules

- Astro (static output) + pnpm, deployed on Vercel. Single page `src/pages/index.astro`; lessons are a content collection (`src/content.config.ts`).
- Keep dependencies to Astro, Biome and TypeScript. The only client JS is the search box.
- Native HTML/CSS (`<details>`, tables, CSS counters), no CSS framework.
- Biome for lint/format, 2-space indentation, TypeScript strict.
