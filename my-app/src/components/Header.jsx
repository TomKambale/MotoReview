import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  useEffect(() => {
    // JavaScript initialization for the carousel
    // Make sure this code executes after the component is rendered
    window.onload = function () {
      // Code related to the carousel can be added here
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="heading">Motoreviews</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
