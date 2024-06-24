import React from "react";
import qrcode from "../qrcode.png";
const QrCode = () => {
  return (
    <div className="container flex-wrap justify-center">
      <div className="text-dark col-12 ">
        <h1 className="fw-bolder text-light my-3">QR Code</h1>
        <h5>Use the noon QR code to pickup your orders at collection points</h5>
      </div>
      <div
        className="d-flex justify-content-center  col-12  align-items-center  mt-3 rounded"
        style={{ maxHeight: "200px", minHeight: "150px" }}
      >
        <img
          src={qrcode}
          alt="QrCode Image"
          className=" p-lg-3 p-0 bg-light"
          style={{width: "150px" , height: "150px"}}
        />
      </div>
    </div>
  );
};

export default QrCode;
