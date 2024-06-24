
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Mousewheel, Pagination } from "swiper/modules";
import img from "../../../img/cat-1.jpg";
const ProductDetailsLeft = () => {

  return (
    <div className="col-lg-5 col-md-6 col-sm-12 col-12">
      <div>
        {" "}
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          style={{ height: "60vh" }}
        >
          <SwiperSlide className="bg-danger">
            <img src={img} className="h-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetailsLeft;
