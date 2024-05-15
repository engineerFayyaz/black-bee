import React, { useState, useEffect } from "react";
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap";
import JoditEditor from "jodit-react";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { app } from "../../FirebaseConfig"; 
import { toast } from "react-toastify";
import "firebase/compat/firestore"


const AddPost = () => {

  console.log("app",app); // Check if app is initialized


  const q = query(collection(app.firestore(), "categories"));
  console.log("query",q)


  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    status: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const q = query(collection(app.firestore(), "categories"));
    const querySnapshot = await getDocs(q);
    const loadedCategories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCategories(loadedCategories);
  };

  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChanged = (data) => {
    setPost({ ...post, description: data });
  };

  const addCategory = async () => {
    if (post.category.trim() === "") {
      toast.error("Please enter a category name.");
      return;
    }
    try {
      const newCategoryRef = await addDoc(collection(app.firestore(), "categories"), { name: post.category });
      const newCategory = { id: newCategoryRef.id, name: post.category };
      setCategories([...categories, newCategory]);
      toast.success("Category added successfully!");
      setPost({ ...post, category: "" }); // Clear category input
    } catch (error) {
      console.error("Error adding category: ", error);
      toast.error("Failed to add category. Please try again later.");
    }
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
        // If category doesn't exist, add it
        await addCategory();
        categoryId = categories[categories.length - 1].id; // Get the ID of the newly added category
      } else {
        categoryId = categoryExists.id;
      }

      const postData = { ...post, categoryId };
      await addDoc(collection(app.firestore(), "posts"), postData);
      toast.success("Post created successfully!!");
      setPost({
        title: "",
        description: "",
        category: "",
        date: "",
        status: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to create post. Please try again later.");
    }
  };

  const resetForm = () => {
    setPost({
      title: "",
      description: "",
      category: "",
      date: "",
      status: "",
    });
  };

  return (
    <div className="wrapper">
      <Card className="shadow-sm border-0 mt-2">
        <CardBody>
          <h3>What's on your mind?</h3>
          <Form onSubmit={createPost}>
            <div className="my-3">
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

            <div className="my-3">
              <Label for="description">Description</Label>
              <JoditEditor
                value={post.description}
                onChange={(newContent) => contentFieldChanged(newContent)}
              />
            </div>

            <div className="my-3">
              <Label for="category">Category</Label>
              <div className="d-flex">
                <Input
                  type="text"
                  placeholder="Enter category"
                  className="rounded-0 me-2"
                  name="category"
                  onChange={fieldChanged}
                  value={post.category}
                />
                <Button type="button" onClick={addCategory} className="rounded-0" color="primary">
                  Add Category
                </Button>
              </div>
            </div>

            <div className="my-3">
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

            <div className="my-3">
              <Label for="status">Status</Label>
              <Input
                type="select"
                id="status"
                className="rounded-0"
                name="status"
                onChange={fieldChanged}
                value={post.status}
              >
                <option disabled value="">Select status</option>
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </Input>
            </div>

            <Container className="text-center">
              <Button type="submit" className="rounded-0" color="primary">
                Create Post
              </Button>
              <Button type="button" onClick={resetForm} className="rounded-0 ms-2" color="danger">
                Reset
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
