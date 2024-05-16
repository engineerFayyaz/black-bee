import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, doc, getDoc, getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import { app } from "../FirebaseConfig";

const BlogSingle = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const db = getFirestore(app);
      const blogRef = doc(db, "posts", id); // Reference to the blog document
      try {
        const blogDoc = await getDoc(blogRef);
        if (blogDoc.exists()) {
          setBlog({ id: blogDoc.id, ...blogDoc.data() }); // Set the blog data
        } else {
          setError("Blog not found");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Error fetching blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      const db = getFirestore(app);
      const latestPostsQuery = query(collection(db, "posts"), orderBy("date", "desc"), limit(4));
      try {
        const querySnapshot = await getDocs(latestPostsQuery);
        const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setLatestPosts(posts);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <main className="pt-40 flex flex-col gap-20 lg:gap-40 lg:text-start text-center text-wrap">
        <div className="blog-single gray-bg">
            <h2 className="mb-5">
            <span className="text-4xl font-bold ">{blog.title}</span>
            </h2>
          <div className="container-fluid">
            <div className="row align-items-start">
              <div className="col-lg-8 m-15px-tb">
                <article className="article">
                  <div className="article-img">
                    {blog.imageUrl && (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="object-cover"
                        width={"100%"}
                        height={"300px"}
                      />
                    )}
                  </div>
                  <div className="article-title text-start">
                    <h6>
                      <a href="#">{blog.categoryName}</a>
                    </h6>
                    <h2>{blog.title}</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={blog.imageUrl} alt="" />
                      </div>
                      <div className="media-body">
                        <label>{blog.author}</label>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="article-content text-start text-justify"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </article>
              </div>
              <div className="col-lg-4 m-15px-tb blog-aside">
                {/* Author details */}
              
                {/* End Author */}
                {/* Latest Post */}
                <div className="widget widget-latest-post">
                  <div className="widget-title">
                    <h3>Latest Posts</h3>
                  </div>
                  <div className="widget-body">
                    {latestPosts.map((post) => (
                      <div className="latest-post-aside media d-flex text-start justify-content-between " key={post.id}>
                        <div className="lpa-left media-body">
                          <div className="lpa-title">
                            <h5>
                              <Link to={`/blogs/${post.id}`}>
                                {post.title}
                              </Link>
                            </h5>
                          </div>
                          <div className="lpa-meta">
                            <span className="name">{post.author}</span>
                            <span className="date">{post.date}</span>
                          </div>
                        </div>
                        <div className="lpa-right">
                          <Link to={`/blogs/${post.id}`}>
                            <img
                              src={post.imageUrl}
                              title={post.title}
                              alt={post.title}
                              width={100}
                            />
                          </Link>
                        </div>
                      </div>
                    ))}
                    <div className="text-center">
                      <Link to="/blogs" className="btn btn-primary mt-4">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Latest Post */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogSingle;
