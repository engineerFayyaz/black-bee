import React, { useState, useEffect } from "react";
import { Card, CardBody, Form, Input, Label, Button, Container, Row, Col } from "reactstrap";
import JoditEditor from "jodit-react";
import { collection, addDoc, query, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../FirebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "react-toastify/dist/ReactToastify.css";
import { AdminHeader } from "../../components/AdminHeader";

const AddPost = () => {
  const db = getFirestore(app); // Firestore initialization
  const storage = getStorage(app); // Firebase storage initialization

  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    status: "",
    image: null,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const q = query(collection(db, "categories"));
    const querySnapshot = await getDocs(q);
    const loadedCategories = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setCategories(loadedCategories);
  };

  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChanged = (data) => {
    setPost({ ...post, description: data });
  };

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setPost({ ...post, image: event.target.files[0] });
    }
  };

  const addCategory = async () => {
    if (post.category.trim() === "") {
      toast.error("Please enter a category name.");
      return;
    }
    try {
      const newCategoryRef = await addDoc(collection(db, "categories"), { name: post.category });
      const newCategory = { id: newCategoryRef.id, name: post.category };
      setCategories([...categories, newCategory]);
      toast.success("Category added successfully!");
      setPost({ ...post, category: "" }); // Clear category input
    } catch (error) {
      console.error("Error adding category: ", error);
      toast.error("Failed to add category. Please try again later.");
    }
  };

  const uploadImageAndGetUrl = async (imageFile) => {
    if (imageFile) {
      const storageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);
      return imageUrl;
    }
    return null;
  };

  const createPost = async (event) => {
    event.preventDefault();
    if (
      post.title.trim() === "" ||
      post.description.trim() === "" ||
      post.category.trim() === "" ||
      post.date.trim() === "" ||
      post.status.trim() === ""
    ) {
      toast.error("All fields are required!!");
      return;
    }

    try {
      let categoryId = "";
      const categoryExists = categories.find((cat) => cat.name === post.category);
      if (!categoryExists) {
        const newCategoryRef = await addDoc(collection(db, "categories"), { name: post.category });
        categoryId = newCategoryRef.id;
        const newCategory = { id: categoryId, name: post.category };
        setCategories([...categories, newCategory]);
      } else {
        categoryId = categoryExists.id;
      }

      const imageUrl = await uploadImageAndGetUrl(post.image);

      const postData = { 
        title: post.title,
        description: post.description,
        categoryId: categoryId,
        categoryName: post.category,
        date: post.date,
        status: post.status,
        imageUrl: imageUrl
      };

      await addDoc(collection(db, "posts"), postData);
      toast.success("Post created successfully!!");
      setPost({
        title: "",
        description: "",
        category: "",
        date: "",
        status: "",
        image: null,
      });
    } catch (error) {
      console.log("Error adding document: ", error, error.message, error.code);
      toast.error("Failed to create post. Please try again later.",error, error.message, error.code);
    }
  };

  const resetForm = () => {
    setPost({
      title: "",
      description: "",
      category: "",
      date: "",
      status: "",
      image: null,
    });
  };

  return (
    <>
    <ToastContainer />
    <AdminHeader />
    <main className="lg:px-40 px-10 pt-40 flex flex-col gap-20 lg:gap-40  lg:text-start text-center text-wrap ">
    <Container className="pb-5">
      <Row  className="d-flex align-items-center  justify-content-center  " >
      <Col md={12}>
      <div className="wrapper">
      <Card className="shadow-sm border-0 create_blog_cards ">
        <CardBody>
          <h1 className="add_blog_page_title">What's on your mind?</h1>
          <Form onSubmit={createPost}>
            <Row>
            <div className="my-3 text-start">
              <Label for="title">Post title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title"
                className="rounded-0"
                name="title"
                onChange={fieldChanged}
                value={post.title}
              />
            </div>
            <div className="my-3 text-start">
              <Label for="description">Description</Label>
              <JoditEditor
                value={post.description}
                onChange={(newContent) => contentFieldChanged(newContent)}
              />
            </div>
            </Row>
            <Row>
              <Col>
              <div className="my-3 text-start">
              <Label for="date">Date</Label>
              <Input
                type="date"
                id="date"
                className="rounded-0"
                name="date"
                onChange={fieldChanged}
                value={post.date}
              />
            </div>

            <div className="my-3 text-start">
              <Label for="status">Status</Label>
              <Input
                type="select"
                id="status"
                className="rounded-0"
                name="status"
                onChange={fieldChanged}
                value={post.status}
              >
                <option disabled value="">
                  Select status
                </option>
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </Input>
            </div>
            <div className="my-3 text-start">
                <Label for="categorySelect">Select Category</Label>
                <Input
                  type="select"
                  id="categorySelect"
                  className="rounded-0"
                  name="category"
                  onChange={fieldChanged}
                  value={post.category}
                >
                  <option disabled value="">
                    Select category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </Input>
              </div>
              </Col>

              <Col>
            
            <div className="my-3 text-start">
              <Label for="image">Image</Label>
              <Input
                type="file"
                id="image"
                className="rounded-0"
                name="image"
                onChange={handleImageChange}
              />
            </div>
            <div className="my-3 text-start">
              <Label for="category">Create New Category</Label>
              <div className="d-flex">
                <Input
                  type="text"
                  placeholder="Enter category"
                  className="rounded-0 me-2 w-75"
                  name="category"
                  onChange={fieldChanged}
                  value={post.category}
                />
                <Button type="button" onClick={addCategory} className="rounded-3 w-50" color="primary">
                  Add Category
                </Button>
              </div>
            </div>
              </Col>
             
            </Row>
            <Container className="text-end mt-4">
              <Button type="submit" className="btn btn-success 
              " color="primary">
                Create Post
              </Button>
              <Button
                type="button"
                onClick={resetForm}
                className=" ms-2 btn btn-danger"
                color="danger"
              >
                Reset
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
      </Col>
      </Row>
    </Container>
    </main>
   
   
    </>
    
  );
};

export default AddPost;
