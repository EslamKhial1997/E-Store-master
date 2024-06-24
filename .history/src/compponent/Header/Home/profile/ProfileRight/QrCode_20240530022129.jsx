import React from "react";
import qrcode from "../qrcode.png";
const QrCode = () => {
  return (
    <div className="container flex-wrap justify-center">
      <div className="text-light col-12 ">
        <h2 className="fw-bolder my-3">QR Code</h2>
        <h5>Use the noon QR code to pickup your orders at collection points</h5>
      </div>
      <div
        className="d-flex justify-content-center  col-12  align-items-center bg-gray-900 mt-3 rounded"
        style={{ maxHeight: "200px", minHeight: "150px" }}
      >
        <img
          src={qrcode}
          alt="QrCode Image"
          className=" p-lg-3 p-0 bg-light"
          style={}
        />
      </div>
    </div>
  );
};

export default QrCode;
