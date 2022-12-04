import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export default defineEventHandler(() => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.flatMap((fileName) => {
    try {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      } as {
        id: string;
        title: string;
        description: string;
        publishedAt: string;
      };
    } catch (e) {
      console.error(e);
      return [];
    }
  });

  return allPostsData.sort(({ publishedAt: a }, { publishedAt: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});