import React from "react";
import OrderLeft from "./OrderLeft";
import OrderRight from "./OrderRight";

const OrdersBottom = () => {
  return (
    <div className=" p-3  rounded d-flex justify-content-between flex-wrap my-3">
      <div className="col-lg-8 col-12">
        {" "}
        <OrderLeft />
      </div>
      <div className="col-lg-3 col-12">
        {" "}
        <OrderRight />
        <Pagina/>
      </div>
    </div>
  );
};

export default OrdersBottom;
