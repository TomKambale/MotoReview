import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const MotorcyclesContext = createContext();

export function MotorcyclesProvider({ children }) {
  const [motorcycles, setMotorcycles] = useState([]);
  const nav = useNavigate();
  const [onchange, setonchange] = useState(false);

  useEffect(() => {
    fetch("/allmotorcycles", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        setMotorcycles(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  // AddBike
  const addMotorcycle = (title, description, price, image, userId) => {
    return new Promise((resolve, reject) => {
      fetch("/newbike", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          price: price,
          image: image,
          user_id: userId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.success) {
            resolve(response);
          } else if (response.error) {
            reject(response);
          } else {
            reject({ error: "Something went wrong" });
          }
        })
        .catch((error) => {
          reject({ error: "Something went wrong" });
        });
    });
  };

  // Delete bike
  const deleteMotorcycle = (id) => {
    fetch(`/deletemoto/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        setonchange(!onchange);
        console.log(response);
        nav("reviews");
        Swal.fire("Success", "Delete success", "success");
        nav("reviews");
      });
  };

  const contextData = {
    motorcycles,
    addMotorcycle,
    deleteMotorcycle,
  };

  return (
    <MotorcyclesContext.Provider value={contextData}>
      {children}
    </MotorcyclesContext.Provider>
  );
}
