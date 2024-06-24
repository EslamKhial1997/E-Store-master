import React from "react";
import cover from "../../image/Cover1.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Header = () => {
  return (
    <div className="d-flex">
      <div className="d-flex flex-wrap">
        {" "}
        <div
          id="carouselExampleIndicators"
          className="carousel align-items-center border rounded d-flex slide bg-dark col-lg-8 col-md-12 col-sm-12 col-12 h-100"
          data-bs-ride="carousel"
        >
         

          <div className="carousel-inner  d-flex">
            <div className="carousel-item active justify-content-center">
              <div className="d-flex">
                <div className=" col-6">
                  <img src={cover} className="w-100 h-100" alt="..." />
                </div>
                <div className="d-flex flex-column p-3 justify-content-center align-items-center  col-6">
                  {" "}
                  <button className="btn btn-info text-light "> Up To 70% Off</button>
                  <h1 className="text-light   p-2 col-lg-8 col-sm-12 col-md-8">
                    Outdoor Wicker Hanging Chair
                  </h1>
                  <a className="text-light ">Exploar Here </a>
                </div>
              </div>
            </div>
            <div className="carousel-item   justify-content-center">
              <div className="d-flex">
                <div className=" col-6">
                  <img src={cover} className="w-100 h-100" alt="..." />
                </div>
                <div className="d-flex flex-column p-3 justify-content-center align-items-center col-6">
                  {" "}
                  <button className="btn btn-info"> Up To 70% Off</button>
                  <h1 className="text-light   p-2 col-lg-8 col-sm-12 col-md-8">
                    Outdoor Wicker Hanging Chair
                  </h1>
                  <a className="text-light ">Exploar Here </a>
                </div>
              </div>
            </div>
            <div className="carousel-item justify-content-center">
              <div className="d-flex">
                <div className=" col-6">
                  <img src={cover} className="w-100 h-100" alt="..." />
                </div>
                <div className="d-flex flex-column p-3 justify-content-center align-items-center col-6">
                  {" "}
                  <button className="btn btn-info"> Up To 70% Off</button>
                  <h1 className="text-light   p-2 col-lg-8 col-sm-12 col-md-8">
                    Outdoor Wicker Hanging Chair
                  </h1>
                  <a className="text-light ">Exploar Here </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden check">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden check">Next</span>
          </button>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 px-2">
          <div className="card m-0 bg-dark text-white">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/017.webp"
              className="card-img"
              alt="Stony Beach"
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card mb-0 bg-dark text-white">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/017.webp"
              className="card-img"
              alt="Stony Beach"
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
