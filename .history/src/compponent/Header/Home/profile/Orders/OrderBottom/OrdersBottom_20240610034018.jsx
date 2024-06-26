import React from "react";
import OrderLeft from "./OrderLeft";
import OrderRight from "./OrderRight";
import PaginationHome from "../../../utils/PaginationHome";

const OrdersBottom = () => {
  return (
    <div className=" p-3 h-screen overflow-y-scroll SideBarProduct rounded d-flex justify-content-between flex-wrap my-3">
      <div className="col-lg-8 col-12">
        {" "}
        <OrderLeft />
      </div>
      <div className="col-lg-3 col-12">
        {" "}
        <OrderRight />
        
      </div>
      <PaginationHome/>
    </div>
  );
};

export default OrdersBottom;
