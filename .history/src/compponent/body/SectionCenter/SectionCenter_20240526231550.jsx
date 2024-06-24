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




    <div id="gallery" class="relative w-full" data-carousel="slide">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
     
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
    </div>
    
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
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
