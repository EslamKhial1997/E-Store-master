import React, { useRef } from "react";
import img from "../img/skinCare.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Tranding from "./Tranding";
import Offers from "./Offers";
import { Skeleton, Stack } from "@mui/material";

const SectionCenter = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div
      id="custom-controls-gallery "
      className="relative  w-full  mt-3"
      data-carousel="slide"
    >
      <div className="relative h-51 overflow-hidden rounded-lg md:h-96 bg-danger">
        <div className="hidden duration-700 ease-in-out h-100" data-carousel-item>
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            className="absolute block w-screen h-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div
          className="hidden duration-700 ease-in-out h-100"
          data-carousel-item="active"
        >
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            className="absolute block max-w-full h-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center pt-4">
        <button
          type="button"
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <Tranding />
    </div>

    // <div className="h-screen">
    //   <Swiper
    //     spaceBetween={30}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Autoplay, Pagination, Navigation]}
    //     onAutoplayTimeLeft={onAutoplayTimeLeft}
    //     className=" mt-3 border rounded"
    //     style={{ height: "600px" }}
    //   >
    //     <SwiperSlide>
    //       <img src={img} />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={img} />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src={img} />
    //     </SwiperSlide>

    //     <div className="autoplay-progress" slot="container-end">
    //       <svg viewBox="0 0 48 48" ref={progressCircle}>
    //         <circle cx="24" cy="24" r="20"></circle>
    //       </svg>
    //       <span ref={progressContent}></span>
    //     </div>
    //   </Swiper>
    //   <Offers />
    //   <Tranding />
    // </div>
    //  <div>

    //    <Offers />
    //  <Tranding />
    // </div>
  );
};

export default SectionCenter;
