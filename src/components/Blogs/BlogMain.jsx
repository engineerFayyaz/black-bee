import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../FirebaseConfig";
import { Link } from "react-router-dom";

const BlogMain = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "posts"));
      const blogs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBlogData(blogs);
    };

    fetchBlogData();
  }, []);

  const extractTextFromHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <>
            <h2
        className="text-lg lg:text-3xl text-orange-500 font-montserrat font-semibold mb-4"
        data-aos="fade-down"
      >
        OUR LATEST BLOGS
      </h2>
     <Row className="d-flex flex-wrap justify-content-start ">
      {blogData ? (
        blogData.map((data) => (
          <Col md={4} key={data.id}>
            <Link to={`/blogs/${data.title}`}>
              <Card className="my-3 shadow-sm  blog_cards">
                {data.imageUrl && (
                  <img src={data.imageUrl} alt={data.title} className="card-img-top w-100" />
                )}
                <CardBody className="pt-0 text-start ">
                  <div className="status d-flex justify-content-between mb-2 pt-0 ">
                  <CardText>
                    <small className="text-muted blog_date">Date: {data.date}</small>
                  </CardText>
                  <CardText>
                    <small className="text-muted blog_category">Category: {data.categoryName}</small>
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
