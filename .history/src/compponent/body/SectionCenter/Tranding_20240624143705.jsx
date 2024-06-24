import React, { useEffect } from "react";
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../img/skinCare.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
import { Skeleton, Stack } from "@mui/material";
import axios from "axios";
const Tranding = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/categories`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch(() => {
        setisLoading(true);
      })
      .finally(() => setisLoading(false));
  }, []);
  const subCategory = data.map((ele) =>
    isLoading ? (
      <div
        className="d-flex justify-content-around border-bottom my-2"
        key={ele._id}
      >
        <Stack>
          <Skeleton
            variant="rounded"
            height={130}
            width={170}
            className="m-1"
          />
          <Skeleton variant="rounded" height={50} width={170} className="m-1" />
        </Stack>
      </div>
    ) : (
      <SwiperSlide style={{ position: "relative" }} key={ele._id}>
        <img src={ele.image} />
        <div className="d-flex flex-wrap bg-warning border">
          {" "}
          <strong
            className="col-12"
            style={{ color: "#072541", cursor: "pointer" }}
          >
            {ele.name}
          </strong>
        </div>
      </SwiperSlide>
    )
  );
  return (
    <div>
      <div className="d-flex items-center justify-center my-3">
        <div className=" col-12 py-4 md:py-8 d-flex overflow-x-scroll SideBarProduct">
          <button
            type="button"
            className="text- text-blue-700 hover:text-black border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl    text-center p-1 m-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-gray-950 dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All categories
          </button>
          <button
            type="button"
            className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Shoes
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Electronics
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Gaming
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Gaming
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            Gaming
          </button>
          <button
            type="button"
           className="text-gray-700 border bg-gray-200 border-white hover:border-blue-700 hover:text-blue-500 dark:hover:text-blue-500 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium p-2 m-2 text-center dark:text-white dark:focus:ring-gray-800"
          >
            asdasda
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="cursor-pointer drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div className="cursor-pointer drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div className="cursor-pointer drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div className="cursor-pointer drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div className="cursor-pointer drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div className="cursor-pointer drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    // <div>
    //   <h3 className="fst-italic" style={{ color: "#072541" }}>
    //     Tranding
    //   </h3>{" "}
    //   <Swiper
    //     spaceBetween={30}
    //     slidesPerView={3}
    //     centeredSlides={false}
    //     autoplay={{
    //       delay: 5000,
    //       disableOnInteraction: false,
    //     }}
    //     modules={[Autoplay]}
    //     className="mySwiper3 mt-3 border rounded d-flex"
    //   >

    //    {subCategory}
    //   </Swiper>
    // </div>
  );
};

export default Tranding;
