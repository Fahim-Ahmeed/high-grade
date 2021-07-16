import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-center">
        <Link className="navbar-brand" to="/">
          <h2>HIGH GRADE</h2>
        </Link>
        <button
          className="navbar-toggler my-nav-btn  bg-primary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation" 
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto my-menu">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/supply">
                Supply
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tools">
                Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/login">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
