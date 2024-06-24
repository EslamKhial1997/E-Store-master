
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Style from "../Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation,Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getData, setOpen,setCreate } from "../../../Store/store";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Tranding = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/products`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch((err) => {
        dispatch(setOpen(true));
        dispatch(setCreate("Something wont wrong"));
      });
  }, []);

  return (
    <div className="h-100">
      {" "}
      <h1 className="text-center w-100 fst-italic text-decoration-underline">
        Product Tranding
      </h1>{" "}
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
      
       
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Scrollbar, Navigation ,Autoplay]}
      >
        { data !== undefined
          ? data.map((e) => (
              <SwiperSlide className="card " key={Math.random()}>
                <div className="p-2 ">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {e.images.length > 0
                        ? e.images.map((img) => (
                            <div
                              className={`carousel-item active `}
                              key={Math.random()}
                            >
                              <img
                                src={img}
                                className={`d-block w-100 border rounded ${Style.imageProduct}`}
                                alt="..."
                              />
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start m-2 align-items-center">{e.ratingQuantity} <FavoriteBorderIcon className="text-warning "/>(65.5k)</div>
                <div className="w-100 text-start p-2">
                  <h6>Leather KeyChains Custom</h6>

                
                 

          
                  <NavLink
                    value={e._id}
                    onClick={(e) => {
                      productId(e.target);
                    }}
                    to={"/category/productDetails"}
                  >
                    More Details...
                  </NavLink>
                </div>
              
              </SwiperSlide>
            ))
          : "No Data"}
      </Swiper>
    </div>
  );
};

export default Tranding;
