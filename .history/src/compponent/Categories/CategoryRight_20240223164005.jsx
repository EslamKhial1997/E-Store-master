import React from "react";
import PaginationHome from "../Header/Home/utils/PaginationHome";
import Style from "../Header/Home/Home.module.css";
import img from "../Header/Home/profile/laptop.png";
import { Rating } from "@mui/material";
import { FavoriteBorderOutlined, ShoppingCart } from "@mui/icons-material";
const CategoryRight = () => {
  return (
    <div className="d-flex  ">
      <div className="p-2 border d-flex flex-wrap col-12 h-100 justify-content-around">
        <div className=" d-flex flex-wrap justify-content-between col-12 gap-1 align-self-start">
          {" "}
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
            <div className={`p-3 rounded ${Style.imageProductCategory}`}>
              <img
                src={img}
                className={`d-block w-100 border rounded   h-100`}
                alt="..."
              />
            </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
              <img
                src={img}
                className={`d-block w-100 border rounded  h-100 `}
                alt="..."
              />
            </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
              <img
                src={img}
                className={`d-block w-100 border rounded h-100`}
                alt="..."
              />
            </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Style.parantProduct} text-decoration-none card my-2 col-lg-3 col-md-5 col-sm-10 col-10`}
            key={Math.random()}
            style={{ position: "relative" }}
          >
          <div className={`p-3 rounded ${Style.imageProductCategory}`}>
          <img
            src={img}
            className={`d-block w-100 border rounded  h-100 `}
            alt="..."
          />
        </div>
            <div className="w-100 text-start p-2 cursor-none">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bolder " style={{ color: "#072541" }}>
                  LapTop
                </h3>
              </div>
              <div>
                {" "}
                <strong className="">1100$</strong>
                <span className="text-decoration-line-through m-2">
                  1200$
                </span>{" "}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ color: "#072541" }}
                />
                <div
                  className={`d-flex justify-content-end p-1 rounded   w-100 `}
                >
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <ShoppingCart
                      fontSize="medium"
                      className="m-1 "
                      color="warning"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div
                    className="p-1 m-1  rounded"
                    style={{ backgroundColor: "#072541" }}
                  >
                    {" "}
                    <FavoriteBorderOutlined
                      fontSize="medium"
                      className="m-1 "
                      color="error"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 border-top border-warning  justify-content-center col-11 align-self-end">
          {" "}
          <PaginationHome />
        </div>
      </div>
    </div>
  );
};

export default CategoryRight;
