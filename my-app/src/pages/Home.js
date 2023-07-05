import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("your_api_endpoint")
      .then((response) => response.json())
      .then((data) => setBikes(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home-container">
          <div className="home-info">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <img
              src="https://ridermagazine.com/wp-content/uploads/2023/04/2023-CFMOTO-450SS-2.jpg"
              className="img-fluid"
              alt="Adventure"
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <strong>Attention all adventurous souls!</strong>
            <p>
              Are you a passionate motorcycle traveler who has explored the far
              corners of our beautiful planet?
            </p>
            <p>
              We want to hear your extraordinary tales and remarkable
              experiences. Join us in sharing your captivating stories, uniting
              riders from every corner of the globe as we embark on an
              exhilarating journey of exploration and inspiration.
            </p>
            <p>
              Come, ignite the wanderlust within you and let your stories be
              heard! Share your remarkable adventures with us today.
            </p>
          </div>
        </div>
      </div>
    </div>
 
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6"></div>
        </div>
   
      <div className="container mt-5">
        <h2 className="text-center">Reviewed Bikes</h2>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            {bikes.map((bike) => (
              <div className="card" key={bike.id}>
                <img src={bike.image} className="card-img-top" alt={bike.name} />
                <div className="card-body">
                  <h5 className="card-title">{bike.name}</h5>
                  <p className="card-text">{bike.review}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            ))}
            {/* Placeholder card */}
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a href="#" className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
            {/* End of placeholder card */}
          </div>
        </div>
      </div>
    </div>
  );
}
