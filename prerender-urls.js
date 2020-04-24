const { generateFileList } = require("./src/crawler");
const { join } = require("path");
const fs = require("fs");

const result = generateFileList(join(__dirname, "content")).nodes;

const [blogs] = result;

module.exports = () => {
  const pages = [
    {
      url: "/",
      seo: {
        title: "Freelance web- og frontend udvikler",
        cover: "/assets/profile.jpg"
      },
      blogs
    }
  ];

  // adding blogs list posts page
  pages.push({
    url: "/blogs/",
    data: blogs
  });

  // adding all blog pages
  pages.push(
    ...blogs.edges.map(blog => {
      const data = fs
        .readFileSync(join("content", "blog", blog.id), "utf-8")
        .replace(/---(.*(\r)?\n)*---/, "");
      return {
        url: `/blog/${blog.id}`,
        seo: blog.details,
        data: {
          details: blog.details,
          content: data
        }
      };
    })
  );

  return pages;
};
