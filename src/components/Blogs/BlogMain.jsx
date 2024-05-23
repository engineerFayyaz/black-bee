import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../FirebaseConfig";

const BlogMain = () => {
  const [blogData, setBlogData] = useState(null);
  const [postData, setPostData] = useState(null); // Added state for posts

  useEffect(() => {
    const fetchBlogAndPostData = async () => {
      const db = getFirestore(app);
  
      // Fetch blogs
      const blogQuerySnapshot = await getDocs(collection(db, "blog"));
      const blogs = blogQuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
      // Fetch posts
      const postQuerySnapshot = await getDocs(collection(db, "posts"));
      const posts = postQuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
      console.log("Posts:", posts); // Add this line to check the fetched post data
  
      // Update state with both blogs and posts
      setBlogData(blogs);
      setPostData(posts);
    };
  
    fetchBlogAndPostData();
  }, []);
  
  

  const extractTextFromHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
      <h2 className="text-lg lg:text-3xl text-orange-500 font-montserrat font-semibold mb-4" data-aos="fade-down">
        OUR LATEST BLOGS
      </h2>
      <Row className="d-flex flex-wrap justify-content-start ">
        {blogData ? (
          blogData.map((data) => (
            <Col md={4} key={data.id}>
              <Link to={`/blogs/${data.id}`}> {/* Link to the single blog page */}
                <Card className="my-3 shadow-sm  blog_cards">
                  {data.imageUrl && <img src={data.imageUrl} alt={data.title} className="card-img-top w-100" />}
                  <CardBody className="pt-0 text-start ">
                    <div className="status d-flex justify-content-between flex-wrap mb-2 pt-0 ">
                      <CardText>
                        <small className="text-muted blog_date">{data.date}</small>
                      </CardText>
                      <CardText>
                        <small className="text-muted blog_category">{data.categoryName}</small>
                      </CardText>
                    </div>
                    <CardTitle tag="h5" className="blog_title font-montserrat">{data.title}</CardTitle>
                    <CardText className="blog_description font-montserrat">{extractTextFromHtml(data.description)}</CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Row>
    </>
  );
};

export default BlogMain;
