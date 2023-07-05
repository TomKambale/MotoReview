import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./Navbar.css";
import "fontsource-montserrat-subrayada";

function Navbar() {
  const { current_user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MOTOREVIEW
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link">
                Add Review
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addbike" className="nav-link">
                Add Bike
              </Link>
            </li>
            {current_user ? (
              <>
                <li className="nav-item">
                  <Link to="/reviews" className="nav-link">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/profile"
                    className="nav-link dropdown-toggle"
                    role="button"
                    onClick={handleDropdownToggle}
                  >
                    Profile
                  </Link>
                  <ul
                    className={`dropdown-menu ${
                      isDropdownOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          logout();
                          handleDropdownClose();
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
