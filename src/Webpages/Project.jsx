import React, { useState } from "react";
import projectOne from "../assets/coffeenayon.jpeg";
import projectTwo from "../assets/ehub.jpeg";
import projectThree from "../assets/fuelflow.jpeg";

function Project() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div
              className="card shadow-sm"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <img
                src={projectOne}
                className="bd-placeholder-img card-img-top"
                alt="Card Image"
                width="100%"
                height="225"
              />

              <div className="card-body">
                <p className="card-text">
                  "Nayon's Coffee. Where you can find a nice coffee and a great
                  place to stay"
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="https://project2-topaz.vercel.app/index.html">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </a>
                  </div>
                  <small className="text-muted fw-bold">Nayon's Coffee</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow-sm"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <img
                src={projectTwo}
                className="bd-placeholder-img card-img-top"
                alt="Card Image"
                width="100%"
                height="225"
              />

              <div className="card-body">
                <p className="card-text">
                  "Ehub, a viewing books website where a user can search an
                  author, books, and genres."
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="https://mini-project2-react.vercel.app/">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </a>
                  </div>
                  <small className="text-muted fw-bold">Ehub</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card shadow-sm"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <img
                src={projectThree}
                className="bd-placeholder-img card-img-top"
                alt="Card Image"
                width="100%"
                height="225"
              />

              <div className="card-body">
                <p className="card-text">
                  "FuelFlow is a web application where a user can order fuel for
                  their vehicle conveniently.",
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href="#">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </a>
                  </div>
                  <small className="text-muted fw-bold">Fuel Flow</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card shadow-sm"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 views</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card shadow-sm"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 views</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card shadow-sm"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 views</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
