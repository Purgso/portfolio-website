import { getCollection } from "astro:content";

// Only return posts without `draft: true` in the frontmatter

export const latestPosts = (
  await getCollection("project", ({ data }) => {
    return data.draft !== true;
  })
).sort(
  (a, b) =>
    (a.data.priority || 0) - (b.data.priority || 0) ||
    new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
);
