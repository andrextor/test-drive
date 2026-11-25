# test-drive

Study notes for the theory classes of a driving licence course. The owner pastes raw notes (text or notebook photos) after each class; the job is to organise them into lesson files. The site is deployed to Vercel so the owner can also search the notes from a phone if the exam allows it. The owner then recopies them by hand into a paper notebook, which is allowed in the exam, so the notes must be complete, ordered and easy to transcribe.

## Workflow when the owner sends notes

1. Read `src/content/lessons/` first to see the existing topics and lessons.
2. Each class is one Markdown file `src/content/lessons/YYYY-MM-DD-slug.md` with frontmatter `title`, `topic` and `date` (the class date written in the notes). Use `###` for each sub-theme: those headings feed the side menu. Topics are grouped on the page in order of their first class; reuse the exact `topic` string to add to an existing topic.
3. Numbering ("Clase N") is automatic, by date; never number by hand.
   Extra exam topics not taught in class go in `src/content/lessons/otros-N-slug.md` without `date`, under topic "Otros temas que pueden salir"; they render last with a "Complemento" badge.
4. Anything the teacher said will be in the exam goes in a blockquote (`> question and answer`) inside the lesson where it was mentioned; it renders as "Pregunta de examen". Also add it to `src/content/lessons/examen-preguntas.md` (topic "Preguntas de examen", rendered just above "Otros temas que pueden salir"): under "Fijas" if confirmed to be in the exam, otherwise under "Posibles", always with its article.
5. Run `pnpm lint:fix && pnpm build` before committing.
6. Commit after each update. Ask the owner before pushing to `origin main` (pushing deploys to Vercel).

## Content rules

- Notes content is written in Spanish; code, class names and commit messages in English.
- Clean up and order the notes, fix spelling, but do not invent facts. If something in the notes is unclear, incomplete or looks wrong, ask the owner or mark it visibly with `(?)` instead of guessing: these notes are used in a real exam.
- Notebook style: never dump bare lists. Each `###` sub-theme gets a short explanation and, where it compares things, a table (`| Item | Qué es / para qué |`). Keep everything short, since it is recopied by hand.
- Building blocks in the Markdown: `<div class="def">` (blank lines inside) for definitions, `<div class="tip">` for "Ojo"/examples, `>` for exam questions, `(?)` for anything to confirm.
- Short explanations of standard, well-known concepts may be added to develop the notes; cite Colombian articles (Ley 769 de 2002, Res. 1885 de 2015) only when sure, otherwise mark `(?)`.

## Technical rules

- Astro (static output) + pnpm, deployed on Vercel. Single page `src/pages/index.astro`; lessons are a content collection (`src/content.config.ts`).
- Tailwind CSS v4 (+ typography plugin for the Markdown) and Lexend font. Avoid adding other dependencies.
- The only client JS is the search (CSS Custom Highlight API), closing the mobile menu (native `popover`) and the print button (`print()`).
- Print/PDF: print-only cover and index pages at the top of `index.astro`; `@media print` in `global.css` (dark mode is screen-only, each topic and class starts a new page, tables and callouts never split).
- Biome does not touch Markdown (it breaks the frontmatter).
- Biome for lint/format, 2-space indentation, TypeScript strict.
