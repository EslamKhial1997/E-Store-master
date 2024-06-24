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
    <div className="my-5 mx-2">
    <h2>Populer</h2>

      <Swiper
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 3,
          },
          640: {
            width: 640,
            slidesPerView: 4,
          },

          768: {
            width: 768,
            slidesPerView: 5,
          },
          1024: {
            width: 1024,
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        className={Style.Swipers}
      >
        {brands}
      </Swiper>
    </div>
  );
}
