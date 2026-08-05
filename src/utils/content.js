import { getCollection } from "astro:content";

// Only return posts without `draft: true` in the frontmatter

export const latestPosts = (
  await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  })
).sort(
  (a, b) =>
    (b.data.priority || 0) - (a.data.priority || 0) ||
    new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
);
