
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../components/context/AuthContext";
// import { MotorcyclesContext } from "../components/context/MotorcyclesContext";

// function AddBike() {
//   const { current_user } = useContext(AuthContext);
//   const { addMotorcycle } = useContext(MotorcyclesContext);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [ setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if user is logged in
//     if (!current_user) {
//       // User is not logged in, handle the error or redirect to the login page
//       console.log("User is not logged in");
//       return;
//     }

//     // Handle form submission logic
//     fetch("/newbike", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie: document.cookie, // Include cookies for session-based authentication
//       },
//       body: JSON.stringify({
//         name : name,
//         description : description,
//         price :price,
//         image : image,
//         user_id: current_user.id
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server
//         if (data.success) {
//           // Post added successfully, perform necessary actions (e.g., redirect, update state)
//           setMessage(data.success);
//           console.log("Post added successfully");
//         } else if (data.error) {
//           // Error occurred, display error message to the user
//           setMessage(data.error);
//           console.log("kuna shida hapa", data.error);
//         } else if (data.warning) {
//           // Missing fields, display warning message to the user
//           setMessage(data.warning);
//           console.log("Missing fields:", data.warning);
//         }
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error("Error:", error);
//       });

//     addMotorcycle(name, description, price, image, current_user.id);
//   };

//   // Render the form only if a user is logged in
//   if (!current_user) {
//     return <p>Please log in to add a bike.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="row my-5">
//         <div className="col">
//           <h3>New Bikes</h3>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Title</label>
//               <input
//                 type="text"
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-control"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <input
//                 type="text"
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="form-control"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Price</label>
//               <input
//                 type="text"
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="form-control"
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Image</label>
//               <input
//                 type="text"
//                 onChange={(e) => setImage(e.target.value)}
//                 className="form-control"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="col"></div>
//       </div>
//     </div>
//   );
// }

// export default AddBike;

import React, { useContext, useState } from "react";
import { AuthContext } from "../components/context/AuthContext";
import { MotorcyclesContext } from "../components/context/MotorcyclesContext";
import Swal from "sweetalert2";


function AddBike() {
  const { current_user } = useContext(AuthContext);
  const { addMotorcycle } = useContext(MotorcyclesContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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
    addMotorcycle(name, description, image, current_user.id)
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
    <div
      className="container col-xl-10 col-xxl-8 px-4 py-5"
      style={{
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1566041510632-30055e21a9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
    <div className="row align-items-center g-lg-5 py-5">
        <div className="col-md-10 mx-auto col-lg-5" >
        <div className="col">
          <form className="p-4 p-md-5 border rounded-3 bg-secondary"
 onSubmit={handleSubmit}>
            <div className="mb-3">
            <h3>New Bikes</h3>
              <label className="form-label">Title</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
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
            <button type="submit" className="btn btn-primary"style={{ backgroundColor: '#E7C200' }}>
              Submit
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
    </div>
  );
}

export default AddBike;
