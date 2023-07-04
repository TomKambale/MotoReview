import React from "react";
import "./Home.css"; // Import the custom CSS file

export default function Home() {
  return (
    <div className="home-container">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center">Reviewed Bikes</h2>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="bike-container">
              <h4>Bike 1</h4>
              <p>Description of Bike 1</p>
              <div className="comment-section">
                <p>Comments:</p>
                {/* Place for comments */}
              </div>
              <div className="like-section">
                <button className="like-button">Like</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="bike-container">
              <h4>Bike 2</h4>
              <p>Description of Bike 2</p>
              <div className="comment-section">
                <p>Comments:</p>
                {/* Place for comments */}
              </div>
              <div className="like-section">
                <button className="like-button">Like</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="bike-container">
              <h4>Bike 3</h4>
              <p>Description of Bike 3</p>
              <div className="comment-section">
                <p>Comments:</p>
                {/* Place for comments */}
              </div>
              <div className="like-section">
                <button className="like-button">Like</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
