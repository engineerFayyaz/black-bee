import React from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "../../hooks/useBlog";

const SingleBlogPage = () => {
  const { title } = useParams();
  const blogData = useBlog(title);

  return (
    <div>
      {blogData ? (
        <div>
          <h1>{blogData.title}</h1>
          <p>{blogData.content}</p>
          {/* Render other blog details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBlogPage;
