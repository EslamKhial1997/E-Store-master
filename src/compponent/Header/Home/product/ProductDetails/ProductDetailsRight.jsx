import React from 'react'
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Style from "../../Home.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const ProductDetailsRight = () => {
  return (
    <div className="col-lg-6 col-md-4 col-sm-12 col-12 shadow-lg p-3 mb-5 bg-white rounded text-start"  style={{ height: "100%" }}>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                {" "}
                <h3>Size </h3>
                <small className="mx-2">3 Items</small>
              </div>
            </div>
            <div className="d-flex justify-content-around mb-3">
              <Chip
                label="xLarge"
                style={{
                  backgroundColor: "#072541",
                  color: "#FFFFFF",
                }}
                avatar={
                  <Avatar
                    className="text-dark fw-bold"
                    sx={{ bgcolor: "#FFBB5C" }}
                  >
                    X
                  </Avatar>
                }
                clickable
                color="warning"
                variant="elevated"
              />
              <Chip
                label="Large"
                style={{
                  backgroundColor: "#072541",
                  color: "#FFFFFF",
                }}
                avatar={
                  <Avatar
                    className="text-dark fw-bold"
                    sx={{ bgcolor: "#FFBB5C" }}
                  >
                    L
                  </Avatar>
                }
                clickable
                color="warning"
                variant="elevated"
              />
              <Chip
                label="Medium"
                style={{
                  backgroundColor: "#072541",
                  color: "#FFFFFF",
                }}
                avatar={
                  <Avatar
                    className="text-dark fw-bold"
                    sx={{ bgcolor: "#FFBB5C" }}
                  >
                    M
                  </Avatar>
                }
                clickable
                color="warning"
                variant="elevated"
              />
              <Chip
                label="Small"
                style={{
                  backgroundColor: "#072541",
                  color: "#FFFFFF",
                }}
                avatar={
                  <Avatar
                    className="text-dark fw-bold"
                    sx={{ bgcolor: "#FFBB5C" }}
                  >
                    S
                  </Avatar>
                }
                clickable
                variant="elevated"
              />
            </div>
          </div>
          <h2>{"dataById.title"} </h2>
          <small
            className={`SideBarProduct text-wrap text-truncate d-flex`}
            style={{ overflowY: "scroll", maxHeight: "100px" }}
          >
            lorem-ipsum.paragraph : The term 'lorem-ipsum.paragraph' is not
            recognized as the name of a cmdlet, function, script file, or
            operable program. Check the spelling of the name, or if a path was
          </small>
          <hr />
          <div>
            <div className="d-flex align-items-center justify-content-between">
              {" "}
              <div>
                {" "}
                <strong>{1600}$</strong>
                <span className="text-decoration-line-through text-danger m-2">
                  {1500}$
                </span>{" "}
              </div>
              <h6 className=" p-2 rounded text-success fw-bolder ">
                Now 10% Off
              </h6>
              <div className="d-flex">
                <span
                  className="d-block m-2"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "10%",
                    backgroundColor: "red",
                  }}
                ></span>
                <span
                  className="d-block m-2"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "10%",
                    backgroundColor: "green",
                  }}
                ></span>
                <span
                  className="d-block m-2"
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "10%",
                    backgroundColor: "green",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>3 Reveiw</span>
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <span className="d-flex ">
                quantity:
                <h5>{1}</h5>
              </span>
              <div className="d-flex  ">
                <span>ratingQuantity:</span> <h5>{4}</h5>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between " >
            <div className="col-4 d-flex justify-content-around align-items-center ">
              <button disabled className="col-4 d-flex justify-content-around align-items-center text-dark p-2  text-dark p-1 rounded border-0 bg-warning fw-bolder text-light">
                <RemoveIcon fontSize="small" />
              </button>
              <button
                className="col-3 rounded border-0 text-light"
                style={{ backgroundColor: "#072541" }}
              >
                1
              </button>
              <button disabled className="col-4 d-flex justify-content-around align-items-center text-dark p-2 rounded border-0 bg-warning fw-bolder text-light">
                <AddIcon fontSize="small" />
              </button>
            </div>
            <button
              className="btn text-light col-3"
              style={{ backgroundColor: "#072541", cursor: "pointer" }}
            >
              Add To Cart
            </button>
            <button
              className="btn text-light col-3"
              style={{ backgroundColor: "#072541", cursor: "pointer" }}
            >
              Buy Now !
            </button>
          </div>
        </div>
  )
}

export default ProductDetailsRight
