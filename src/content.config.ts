import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    order: z.number().int().positive(),
  }),
});

export const collections = { lessons };
