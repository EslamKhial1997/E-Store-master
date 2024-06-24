import React from "react";
import img from "../img/skinCare.png";
import { Skeleton, Stack } from "@mui/material";
const ShowCase = () => {
  return (
    // <div>
    //   <div className="d-flex flex-wrap justify-content-around p-1">
    //     <img src={img} className="col-5 border rounded" />
    //     <img src={img} className="col-5 border rounded" />
    //   </div>
    //   <div className="d-flex flex-wrap justify-content-around p-1">
    //     <img src={img} className="col-5 border rounded" />
    //     <img src={img} className="col-5 border rounded" />
    //   </div>
    //   <div className="d-flex flex-wrap justify-content-around p-1">
    //     <img src={img} className="col-5 border rounded" />
    //     <img src={img} className="col-5 border rounded" />
    //   </div>
    //   <div className="d-flex flex-wrap justify-content-around p-1">
    //     <img src={img} className="col-5 border rounded" />
    //     <img src={img} className="col-5 border rounded" />
    //   </div>
    // </div>
    <Stack>
      <Skeleton variant="rounded" height={95} className="m-2" />
      <Skeleton variant="rounded" height={95} className="m-2" />
      <Skeleton variant="rounded" height={95} className="m-2" />
      <Skeleton variant="rounded" height={95} className="m-2" />
    </Stack>
  );
};

export default ShowCase;
