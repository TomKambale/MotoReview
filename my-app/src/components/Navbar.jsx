import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <h1 id="motto">Motorcycling at its best.</h1>
      <button id="reviewsbtn">Add Reviews</button>
      <button id="accountbtn">My Account</button>
    </nav>
  );
}

export default Navbar;
