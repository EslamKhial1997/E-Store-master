import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";

const HeighSale = () => {
  return (
    <div className="  p-3 bg-warning my-lg-1 my-md-3 my-sm-3 my-3">
      <div className="d-flex col-12 container-fluid d-flex justify-content-between align-items-center ">
        {" "}
        <strong
          className="border p-2 text-light rounded"
          style={{ backgroundColor: "#072541" }}
        >
          Heigh Sales
        </strong>
        <div
          className="border text-light p-2 rounded"
          style={{ backgroundColor: "#072541", cursor: "pointer" }}
        >
          Show More
          <ArrowRightAlt />
        </div>
      </div>
    </div>
  );
};

export default HeighSale;
