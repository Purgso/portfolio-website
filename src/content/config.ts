import { z, defineCollection } from "astro:content";

const ProjectPosts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      category: z.string().trim(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()),
      image: image(),
      publishDate: z.string().transform((str) => new Date(str)),
      priority: z.number().optional(),
    }),
});

export const collections = {
  project: ProjectPosts,
};
