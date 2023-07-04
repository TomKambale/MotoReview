import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./Navbar.css"; // Import the custom CSS file

function Navbar() {
  const { current_user, logout } = useContext(AuthContext);

  return (
    <div>
      <header className="yellow-background">
        <div className="container">
          <h1 className="header-title">MOTOREVIEW</h1>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg mt-4">
        <div className="container">
          <h1 id="motto">Motorcycling at its best.</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reviews" className="nav-link active">
                  Add Review
                </Link>
              </li>
              {current_user ? (
                <>
                  <li className="nav-item">
                    <Link to="/reviews" className="nav-link active">
                      Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/addbike" className="nav-link">
                      Add Bike
                    </Link>
                  </li>
                  <li className="nav-item dropdown ml-auto">
                    <Link
                      to="/profile"
                      className="nav-link active dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </Link>
                    <ul className="dropdown-menu">
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
                          onClick={() => logout()}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ml-auto">
                    <Link
                      to="/"
                      className="nav-link active dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      My account
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/login" className="dropdown-item">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/register" className="dropdown-item">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
