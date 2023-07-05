import React, { useContext, useState } from "react";
import { AuthContext } from "../components/context/AuthContext";
import { MotorcyclesContext } from "../components/context/MotorcyclesContext";
import Swal from "sweetalert2";
import "./AddBike.css"; // Import the custom CSS file

function AddBike() {
  const { current_user } = useContext(AuthContext);
  const { addMotorcycle } = useContext(MotorcyclesContext);

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState("");
  const [setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!current_user) {
      // User is not logged in, handle the error or redirect to the login page
      console.log("User is not logged in");
      return;
    }

    // Call addMotorcycle function from the context
    addMotorcycle(title, review, image, current_user.id)
      .then((response) => {
        // Handle the response from the context
        if (response.success) {
          setMessage(response.success);
          Swal.fire("Success", response.success, "success");
          console.log("Post added successfully");
        } else if (response.error) {
          setMessage(response.error);
          Swal.fire("Error", response.error, "error");
          console.log("Error:", response.error);
        } else if (response.warning) {
          setMessage(response.warning);
          Swal.fire("Warning", response.warning, "warning");
          console.log("Missing fields:", response.warning);
        }
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
        Swal.fire("Error", "Something went wrong", "error");
      });
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h3 className="mb-4">New Bikes</h3>

          <form className="add-bike-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Review</label>
              <input
                type="text"
                onChange={(e) => setReview(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default AddBike;
