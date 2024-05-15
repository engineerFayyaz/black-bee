import { useState, useEffect } from "react";

export const useBlog = (title) => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await fetch("");
        if (!data.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await data.json();
        setBlogData(jsonData);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchBlogData();

    // No return statement needed here
  }, [title]); // Empty dependency array ensures this effect runs only once

  // Return the blogData state
  return blogData;
};
