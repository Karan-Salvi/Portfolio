import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
export const getSingleBlog = async (slug: string) => {
  try {
    const SingleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data/", `${slug}.mdx`),
      "utf-8"
    );

    if (!SingleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<{
      title: string;
    }>({
      source: SingleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error("Error reading or compiling MDX file:", error);
    return null;
  }
};

export async function getBlogs() {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"));

  const allblogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");

      const frontmatter = await getFrontMatterBySlug(slug);

      return {
        slug,
        ...frontmatter,
      };
    })
  );

  return allblogs;
}

export const getFrontMatterBySlug = async (slug: string) => {
  const SingleBlog = await fs.readFile(
    path.join(process.cwd(), "src/data/", `${slug}.mdx`),
    "utf-8"
  );

  if (!SingleBlog) {
    return null;
  }

  // const { content, frontmatter } = await compileMDX<{ title: string }>({
  //   source: SingleBlog,
  //   options: { parseFrontmatter: true },
  // });

  const { frontmatter } = await compileMDX<{ title: string }>({
    source: SingleBlog,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};
