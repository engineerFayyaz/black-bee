import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import "react-toastify/dist/ReactToastify.css";
import {
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import { AdminHeader } from "../../components/AdminHeader";
import { toast, ToastContainer } from "react-toastify";

function ContactRequest() {
  const [contactRequests, setContactRequests] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchContactRequests = async () => {
      try {
        const contactRequestsRef = collection(db, "contact_details");
        const contactRequestsSnapshot = await getDocs(contactRequestsRef);
        const contactRequestsList = contactRequestsSnapshot.docs.map((doc) => ({
          id: doc.id, // Include document ID
          ...doc.data(),
        }));
        setContactRequests(contactRequestsList);
      } catch (error) {
        console.error("Error fetching contact requests: ", error);
        toast.error("Error fetching contact requests");
      }
    };
  
    fetchContactRequests();
  }, []);

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Invalid document ID");
      toast.error("Invalid document ID");
      return;
    }
    try {
      await deleteDoc(doc(db, "contactForms", id));
      setContactRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== id)
      );
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Error deleting document: ", error);
      toast.error("error while deleting");

      // Handle error
    }
  };

  return (
    <>
    <ToastContainer />
      <AdminHeader />
      <main className="lg:px-40 px-10 pt-40 flex flex-col gap-20 lg:gap-40  lg:text-start text-center text-wrap ">
        <Container >
          <div className="text-center  mt-3 mb-5">
          <span className="lg:text-5xl text-bold text-2xl font-montserrat lg:py-6 aos-init aos-animate" data-aos="fade-up">Contact Requests</span>
          </div>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact_Number</th>
                    {/* <th>Message</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contactRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.name}</td>
                      <td>{request.email}</td>
                      <td>{request.phone}</td>
                      {/* <td>{request.message}</td> */}
                      <td>
                        <button className="btn btn-danger" onClick={() => handleDelete(request.id)} >
                        Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default ContactRequest;
