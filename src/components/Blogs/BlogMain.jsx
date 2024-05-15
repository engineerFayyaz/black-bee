import React from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { useBlog } from "../../hooks/useBlog";

const BlogMain = () => {
  const blogData= useBlog()

  console.log(blogData);

  return (
    <div>
      {blogData ? (
        blogData.map((data) => (
          <Link to={`/blogs/${data.title}`} key={data.id}>
            <BlogCard data={data} />
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogMain;
