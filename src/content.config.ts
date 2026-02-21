import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    author: z.string().default('Diego Macias'),
    authorTitle: z.string().default('Owner & Master Cabinet Maker, CA License #1103734'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('8 min'),
    faqSchema: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    relatedSlugs: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
