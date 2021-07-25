import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark header">
      <div className="container-fluid brand">
        <Link className="navbar-brand" to="/">
          MERN Stack Todo
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto flex-nowrap">
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/set-email">
                Default Email
              </Link>
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
}
