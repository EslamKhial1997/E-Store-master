
import img from "../../img/product-1.jpg";
import Style from "../Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Skeleton, Stack } from "@mui/material";
const FooterBrand = () => {
  return (
    // <div  className="my-5 mx-2">
    // <h3>Popular Product</h3>
    //   <Swiper
    //     breakpoints={{
    //       // when window width is >= 640px
    //       375: {
    //         width: 375,
    //         slidesPerView: 3,
    //       },
    //       640: {
    //         width: 640,
    //         slidesPerView: 4,
    //       },
    //       // when window width is >= 768px
    //       768: {
    //         width: 768,
    //         slidesPerView: 5,
    //       },
    //     }}
    //     spaceBetween={10}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     loop={true}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Autoplay, Navigation]}
    //     className={Style.Swipers}
    //   >
      
    //     <SwiperSlide className="h-100 rounded ">
    //       <img src={img} className="h-100 rounded" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //     <SwiperSlide className="h-100 ">
    //       <img src={img} className="h-100" />
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
  //   <div className="my-5 mx-2">
  //   <h3>Popular Brands</h3>
  //   <Swiper
  //     breakpoints={{
        
  //       375: {
  //         width: 375,
  //         slidesPerView: 3,
  //       },
  //       640: {
  //         width: 640,
  //         slidesPerView: 4,
  //       },
       
  //       768: {
  //         width: 768,
  //         slidesPerView: 5,
  //       },
  //       1024: {
  //         width: 1024,
  //         slidesPerView: 8,
  //       },
  //     }}
  //     spaceBetween={10}
    
     
      
  //     className={Style.Swipers}
  //   >
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //     <SwiperSlide className="h-100 ">
  //       <Stack spacing={1} className={` text-decoration-none  m-2 `}>
  //         <Skeleton variant="rounded" height={100} />
  //       </Stack>
  //     </SwiperSlide>
  //   </Swiper>
  // </div>
  );
};

export default FooterBrand;
