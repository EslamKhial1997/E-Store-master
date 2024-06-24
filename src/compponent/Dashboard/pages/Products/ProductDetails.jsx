import  { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../../utils/Loading";
import { getDataByID } from "../../../Store/store";
import { useParams } from "react-router-dom";
import { ReplyAll } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import error400 from "../image/400-status-code.png";
import { Button } from "@mui/material";
const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { dataById, isLoading, isError } = useSelector(
    (state) => state.StoreSlice
  );

  useEffect(() => {
    dispatch(getDataByID({ title: "products", id: params.id }));
  }, [dispatch, params]);
  console.log(dataById);
  return (
    <div className=" w-100">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <img src={error400} />
      ) : dataById === null ? (
        <img src={error400} />
      ) : (
        <div className="bg-light col-lg-10 col-md-10 col-sm-12 m-auto  pt-5  mt-5 border rounded">
          <div className="w-100 justify-content-center border p-2 rounded col-lg-10 col-md-10 col-sm-12 ">
            <div className="row container justify-content-around">
              {" "}
              <div className="flex-wrap d-flex justify-content-around align-items-center col-lg-10 col-md-10 col-sm-12 border-bottom mb-2">
                <div className="col-lg-8 col-md-8 col-sm-8"><span >
                <strong>ProductID</strong>:{dataById._id}
              </span></div>
                <div className="col-lg-3 mb-2 col-md-3 col-sm-4 d-flex justify-content-between">
                  <Button className="bg-light border rounded">
                    {" "}
                    <DeleteIcon className="text-danger " />
                  </Button>

                  <Button className="bg-light border rounded">
                    {" "}
                    <EditIcon />
                  </Button>
                </div>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12">
                <div className="d-flex col-12 flex-wrap justify-content-around">
                  <div className="bg-light  col-5 text-center border border-primary rounded">
                    <h6>CreateAt</h6>
                    <span>{`${new Date(
                      dataById.createdAt
                    ).toLocaleTimeString()}`}</span>
                  </div>
                  <div className="bg-light col-5  text-center border rounded border-info">
                    <h6>UpdatedAt</h6>
                    <span>{`${new Date(
                      dataById.updatedAt
                    ).toLocaleTimeString()}`}</span>
                  </div>
                </div>
                <div>
                  {" "}
                  <h3 className="mt-3 fw-bold ">{dataById.title}</h3>
                  <p>{dataById.description}</p>
                  <div className="d-flex">
                    {" "}
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                    <span className="mx-2">125.2</span>
                  </div>
                  <div className="d-flex align-items-center">
                    {" "}
                    <h6 className="text-danger text-decoration-line-through">
                      {dataById.price}L.E
                    </h6>{" "}
                    <h4 className="mx-3 text-success">
                      1400L.E <ReplyAll />
                    </h4>
                  </div>
                  <div className="d-flex col-3 justify-content-between mt-3">
                    {dataById.colors !== undefined
                      ? dataById.colors.map((e, inx) => (
                          <span
                            key={inx}
                            style={{
                              background: e,
                              borderRadius: "50%",
                              width: "25px",
                              height: "25px",
                            }}
                          ></span>
                        ))
                      : "a"}
                  </div>
                  <div className="d-flex col-lg-4 col-md-8 col-sm-12 my-3 justify-content-between">
                    {" "}
                    <div>
                      <span>Sold:</span>
                      <strong>{dataById.sold}</strong>
                    </div>
                    <div>
                      <span>Quantity:</span>
                      <strong>{dataById.quantity}</strong>
                    </div>
                  </div>
                </div>

                <div className="d-flex col-12 flex-wrap justify-content-around my-3 py-2 bg-white border rounded">
                  <div className=" col-lg-3 col-md-4 col-sm-4  text-center  ">
                    <span>
                      Category:- <strong className="d-block">Category</strong>
                    </span>
                  </div>
                  <div className=" col-lg-3 col-md-4 col-sm-4 text-center  ">
                    <span>
                      subCategory:-{" "}
                      <strong className="d-block">subCategory</strong>
                      <strong className="d-block">subCategory</strong>
                    </span>
                  </div>
                  <div className=" col-lg-3 col-md-4 col-sm-4  text-center  ">
                    <span>
                      Brand:- <strong className="d-block">Brand</strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12 parentSwiper">
                {" "}
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 w-100 "
                  height={"auto"}
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
