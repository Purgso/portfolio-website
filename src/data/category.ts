export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink" | "yellow";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Automotive",
    slug: "automotive",
    color: "yellow",
    description:
      "Projects that involve working on cars",
  },
  {
    title: "Programming",
    slug: "programming",
    color: "blue",
    description:
      "Projects that involve programming, coding, and software development",
  },
];
