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
    <div className="h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className=" mt-3 border rounded"
        style={{ height: "600px" }}
      >
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <Offers />
      <Tranding />
    </div>
      //  <div>
      
      //    <Offers />
      //  <Tranding />
      // </div>
  );
};

export default SectionCenter;
