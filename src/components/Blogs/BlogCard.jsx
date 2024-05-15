import React from "react";

const BlogCard = ({ data }) => {
  return (
    <div>
      <img
        src={
          "https://blackbee-digital.com/uploads/blog/"+
          data.blog_image
        }
        alt={data.title}
        className="w-60"
      />
      <h3>{data.title}</h3>
    </div>
  );
};

export default BlogCard;
