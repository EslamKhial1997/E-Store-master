import React from "react";
import img from "../../mastercart.png";
import { Chip } from "@mui/material";
const OrderRight = () => {
  return (
    <div className=" bg-gray-900 border m-2 container flex-wrap text-light">
      <div className=" col-12 p-2 rounded">
        <h5 className="p-2">Payment Information</h5>
        <div className="my-2">
          <img src={img} style={{ width: "50px", height: "50px" }} />
          <span>Master Cart Num</span>
          <small>************1556</small>
        </div>
        <div className="">
          <strong>Bussniss Name:-</strong>
          <small>MasterCart.inc</small>
        </div>
        <div className="">
          <strong>Phone:-</strong>
          <small>01276448769</small>
        </div>
      </div>
      
      <div className="col-12  my-2">
        <div>
          <div className="">
           
            <strong>SubTotal:-</strong>
            <small>15256$</small>
          </div>
          <div className="">
            <strong>Shipping Cost:-</strong>
            <small>25$</small>
          </div>
          <div className="">
            <strong>Total:-</strong>
            <small>12500$</small>
          </div>
          <div className="py-2">
          <Chip label="Payment Made"   />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRight;
