import React, { useEffect } from "react";
import Style from "../Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Skeleton, Stack } from "@mui/material";
import axios from "axios";

export default function Brands() {
  const [data, setData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/brands`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch(() => {
        setisLoading(false);
      })
      .finally(() => setisLoading(false));
  }, []);
  const brands = data.map((ele) =>
    isLoading ? (
      <SwiperSlide className="h-100 " key={ele._id}>
        <Stack spacing={1} className={` text-decoration-none  m-2 `}>
          <Skeleton variant="rounded" height={100} />
        </Stack>
      </SwiperSlide>
    ) : (
      <SwiperSlide className="bg-danger" key={ele._id}>
        <img src={ele.image} style={{ maxHeight: "100px" }} />
      </SwiperSlide>
    )
  );

  return (
    <div className="my-5">
    <div className="bg-gray-700 d-flex col-12 justify-content-around align-items-center fw-bold  my-5 p-4  rounded">
    <strong className="col-8  >
      Big offers on new collection
    </strong>
    <span
      className="col-3 text-center rounded h-100 text-light"
      style={{ backgroundColor: "#072541", cursor: "pointer" }}
    >
      Know More
    </span>
  </div>
    </div>
  );
}
