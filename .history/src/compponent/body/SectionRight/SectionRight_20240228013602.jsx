import React from "react";
import CoronavirusSharpIcon from "@mui/icons-material/CoronavirusSharp";
import LoopSharpIcon from '@mui/icons-material/LoopSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import AirplanemodeActiveSharpIcon from '@mui/icons-material/AirplanemodeActiveSharp';
import ShowCase from "./ShowCase";
const SectionRight = () => {
  return (
    <div className="sticky-top">
    <div className="bg-light  rounded">
      <div className="d-flex align-items-center justify-content-around  rounded my-3" style={{ backgroundColor: "#072541" }}>
        <div className=" col-3">
          <CoronavirusSharpIcon
            color="warning"
            fontSize="large"
            sx={{ fontSize: "50px" }}
          />
        </div>
        <div className="text-light col-8 d-flex flex-wrap justify-content-center text-center">
          <strong className="col-12 ">Join Risk Free</strong>
          <small className="col-12 ">30 Days Refund</small>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around rounded my-3" style={{ backgroundColor: "#072541" }}>
        <div className=" col-3">
          <LoopSharpIcon
            color="warning"
            fontSize="large"
            sx={{ fontSize: "50px" }}
          />
        </div>
        <div className="text-light col-8 d-flex flex-wrap justify-content-center text-center" >
          <strong className="col-12 ">100% Safe</strong>
          <small className="col-12 ">Secure Shopping</small>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around rounded my-3" style={{ backgroundColor: "#072541" }}>
        <div className=" col-3">
          <SupportAgentSharpIcon
            color="warning"
            fontSize="large"
            sx={{ fontSize: "50px" }}
          />
        </div>
        <div className="text-light col-8 d-flex flex-wrap justify-content-center text-center">
          <strong className="col-12 ">24x7 Support</strong>
          <small className="col-12 ">Online 24 Hours</small>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around rounded my-3" style={{ backgroundColor: "#072541" }}>
        <div className=" col-3">
          <ShoppingBasketSharpIcon
            color="warning"
            fontSize="large"
            sx={{ fontSize: "50px" }}
          />
        </div>
        <div className="text-light col-8 d-flex flex-wrap justify-content-center text-center">
          <strong className="col-12 ">Best Offer</strong>
          <small className="col-12 ">Grab Now</small>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around rounded my-3" style={{ backgroundColor: "#072541" }}>
        <div className=" col-3">
          <AirplanemodeActiveSharpIcon
            color="warning"
            fontSize="large"
            sx={{ fontSize: "50px" }}
          />
        </div>
        <div className="text-light col-8 d-flex flex-wrap justify-content-center text-center">
          <strong className="col-12 ">Free Shiping</strong>
          <small className="col-12 ">On All Order</small>
        </div>
      </div>
    </div>
    <div className="bg-white  rounded mt-3">
    <ShowCase/>
    </div>
    </div>
  );
};

export default SectionRight;
