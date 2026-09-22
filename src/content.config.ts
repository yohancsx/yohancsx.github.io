import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Shared shape for "extra links" on any entry — a poster, a dataset, a video,
 * a press write-up. Anything that isn't the paper or the slides.
 */
const linkList = z
  .array(
    z.object({
      label: z.string(),
      url: z.string(),
    }),
  )
  .default([]);

/** Every collection loads Markdown from its own folder under src/content. */
const md = (folder: string) =>
  glob({ pattern: '**/*.md', base: `./src/content/${folder}` });

const research = defineCollection({
  loader: md('research'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Sorts the page, newest first. Use the publication or project year. */
      year: z.number(),
      /** Author list as you'd like it displayed. Optional. */
      authors: z.string().optional(),
      /** Journal, conference, or lab. Shown under the title. */
      venue: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Put the PDF in public/papers/ and reference it as /papers/name.pdf */
      paper: z.string().optional(),
      slides: z.string().optional(),
      doi: z.string().optional(),
      links: linkList,
      tags: z.array(z.string()).default([]),
      /** Pin an entry to the top of the page regardless of year. */
      featured: z.boolean().default(false),
      /** Set false to keep a draft out of the built site. */
      published: z.boolean().default(true),
    }),
});

const projects = defineCollection({
  loader: md('projects'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Source repository. Rendered as a "Source" button. */
      repo: z.string().optional(),
      /** Live demo or published package. Rendered as a "Live" button. */
      url: z.string().optional(),
      /** Languages and tools, shown as small pills. */
      tech: z.array(z.string()).default([]),
      links: linkList,
      featured: z.boolean().default(false),
      published: z.boolean().default(true),
    }),
});

const outreach = defineCollection({
  loader: md('outreach'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** ISO date (2025-04-12) or just a year. Sorts the page, newest first. */
      date: z.coerce.date(),
      venue: z.string().optional(),
      /** e.g. "Grade 7-9 students", "Public / all ages" */
      audience: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /**
       * Downloadable teaching resources. Put files in public/files/ and
       * reference them as /files/name.pdf or /files/model.stl
       */
      resources: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
            /** Drives the little icon next to the download. */
            kind: z.enum(['pdf', 'stl', 'slides', 'link', 'zip']).default('link'),
          }),
        )
        .default([]),
      links: linkList,
      featured: z.boolean().default(false),
      published: z.boolean().default(true),
    }),
});

/** Image-forward gallery pieces for the hobbies page. */
const art = defineCollection({
  loader: md('art'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().optional(),
      /** e.g. "Oil on canvas", "Digital", "35mm film" */
      medium: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      order: z.number().default(0),
      published: z.boolean().default(true),
    }),
});

/** Text blurbs about non-visual hobbies, shown above the gallery. */
const hobbies = defineCollection({
  loader: md('hobbies'),
  schema: z.object({
    title: z.string(),
    /** Any emoji, shown beside the heading. Optional. */
    icon: z.string().optional(),
    links: linkList,
    order: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

export const collections = { research, projects, outreach, art, hobbies };
