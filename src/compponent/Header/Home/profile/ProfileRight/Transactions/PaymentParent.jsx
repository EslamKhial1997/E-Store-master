import React from "react";
import PaymentLeft from "./Payment.Left";
import PaymentRight from "./PaymentRight";
import { HdrPlus } from "@mui/icons-material";

const PaymentParent = () => {
  return (
    <div className="mx-3">
      <div className="d-flex justify-content-between align-items-center py-2">
        <h2 className="m-3 text-dark fw-bold">Transication</h2>
        <button className="btn  btn-warning "><HdrPlus/> Create New</button>
      </div>
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-8  col-12 bg-light border rounded">
          {" "}
          <PaymentLeft />
        </div>
        <div className="col-lg-3 col-12 rounded bg-body border "  >
          <PaymentRight />
        </div>
      </div>
    </div>
  );
};

export default PaymentParent;
