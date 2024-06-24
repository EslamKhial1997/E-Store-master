import React from "react";

const PaymentRight = () => {
  return (
    <div className="">
      <h5 className="p-2 w-100 border-bottom"  style={{
        backgroundColor: "#072541",
        color: "#FFFFFF",
      }}>Transactions Details</h5>
      <div className="d-flex flex-wrap border-bottom m-2">
        <span className="col-12 fs-5 fw-bold">Suplier:</span>
        <span className="col-12">TemplateMount</span>
      </div>
      <div className="d-flex flex-wrap border-bottom m-2">
        <span className="col-12 fs-5 fw-bold">Date:</span>
        <span className="col-12">December 19th 2024</span>
      </div>
      <div className="d-flex flex-wrap border-bottom m-2">
        <span className="col-12 fs-5 fw-bold">VAT ID:</span>
        <span className="col-12">1256645785</span>
      </div>
      <div className="d-flex flex-wrap border-bottom m-2">
        <span className="col-12 fs-5 fw-bold">Email:</span>
        <span className="col-12">eslamkhial1997@gmail.com</span>
      </div>
      <div className="d-flex flex-wrap border-bottom m-2">
        <span className="col-12 fs-5 fw-bold">Email:</span>
        <span className="col-12">eslamkhial1997@gmail.com</span>
      </div>
      <div className="d-flex flex-wrap border-bottom m-2">
        <span className="col-12 fs-5 fw-bold">Items Purchased:</span>
        <span className="col-12 text-warning">eslamkhial1997@gmail.com</span>
        <span className="col-12 text-warning">eslamkhial1997@gmail.com</span>
        <span className="col-12 text-warning">eslamkhial1997@gmail.com</span>
      </div>
      <div className="d-flex justify-content-between align-items-center flex-wrap border-bottom m-2">
      <span className="col-4 fs-5 fw-bold">Paid:</span>
      <span className="col-7 fw-bold">15000$</span>
    </div>
    </div>
  );
};

export default PaymentRight;
