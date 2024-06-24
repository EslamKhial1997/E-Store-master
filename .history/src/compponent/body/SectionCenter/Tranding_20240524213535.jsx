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
            <strong className="col-12"  style={{color:"#072541" ,cursor: "pointer"}}>{ele.name}</strong>
           
          </div>
  
        </SwiperSlide>
    )
  );
  return (
   
    <div>
      <h3 className="fst-italic" style={{ color: "#072541" }}>
        Tranding
      </h3>{" "}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper3 mt-3 border rounded d-flex"
      >
      
     
       {subCategory}
      </Swiper>
    </div>
  );
};

export default Tranding;
