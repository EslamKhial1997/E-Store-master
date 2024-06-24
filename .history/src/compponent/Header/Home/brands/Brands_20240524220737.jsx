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

<form class="max-w-md mx-auto">   
<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>
    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>
</form>

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
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
