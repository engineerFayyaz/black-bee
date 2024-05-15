import React from "react";
import BlogHero from "../components/Blogs/BlogHero";
import BlogMain from "../components/Blogs/BlogMain";

const BlogsPage = () => {
  return (
    <main className="lg:px-40 px-10 pt-40 flex flex-col gap-20 lg:gap-40  lg:text-start text-center text-wrap ">
      <div>
        <BlogHero />
      </div>

      <div>
        <BlogMain />
      </div>
    </main>
  );
};

export default BlogsPage;
