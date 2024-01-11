import React from "react";
import "./test.scss";

export default function nave() {
  return (
    <div>
      <div className="mainNaveee">
        <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
          <div className="container">
            <a className="navbar-brand" href="#!">
              <i className="fab fa-mdb fa-4x"></i>
            </a>
            <button
              className="navbar-toggler"
              type="button"
            //   data-mdb-toggle="collapse"
            //   data-mdb-target="#navbarSupportedContent"
            //   aria-controls="navbarSupportedContent"
            //   aria-expanded="false"
            //   aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
            //   id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Our Story
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Membership
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Write
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Sign In
                  </a>
                </li>
                <button type="button" className="btn btn-dark ms-3">
                  Get Started
                </button>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="d-flex align-items-center justify-content-center text-center"
          style="height: 1100px;"
        >
          <p className="h3">
            Scroll down to see the effect of change the navbar background-color
          </p>
        </div>
      </div>
    </div>
  );
}
