import { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataByID } from "../../../Store/store";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Style from "../Home.module.css";
import error from "../../img/error.jpg";
import { FavoriteBorderOutlined, ShoppingCart } from "@mui/icons-material";
const Products = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.StoreSlice);

  const productId = (e) => {
    dispatch(getDataByID("products"));
  };
  useEffect(() => {
    dispatch(getData("products"));
  }, [dispatch]);
  return (
    // <div className="d-flex flex-wrap  justify-content-around ">
    //   {data.length > 0 ? (
    //     data.map((e) => (
    //       <div
    //         className={`${Style.parantProduct} text-decoration-none card m-2 col-lg-3 col-md-5 col-sm-10 col-10`}
    //         key={Math.random()}
    //         style={{ position: "relative" }}
    //       >
    //         <div className="p-3 rounded">
    //           <img
    //             // src={e.images[1]}
    //             className={`d-block w-100 border rounded   ${Style.imageProduct}`}
    //             alt="..."
    //           />
    //         </div>
    //         <div className="w-100 text-start p-2 cursor-none">
    //           <div className="d-flex justify-content-between align-items-center">
    //             <h3 className="fw-bolder " style={{ color: "#072541" }}>
    //               {e.title}
    //             </h3>
    //           </div>
    //           <div>
    //             {" "}
    //             <strong className="">1100$</strong>
    //             <span className="text-decoration-line-through m-2">
    //               1200$
    //             </span>{" "}
    //           </div>
    //           <div className="d-flex justify-content-between align-items-center">
    //             <Rating
    //               name="half-rating-read"
    //               defaultValue={2.5}
    //               precision={0.5}
    //               readOnly
    //               style={{ color: "#072541" }}
    //             />
    //             <div
    //               className={`d-flex justify-content-end p-1 rounded   w-100 `}
    //             >
    //               <div
    //                 className="p-1 m-1  rounded"
    //                 style={{ backgroundColor: "#072541" }}
    //               >
    //                 {" "}
    //                 <ShoppingCart
    //                   fontSize="medium"
    //                   className="m-1 "
    //                   color="warning"
    //                   style={{ cursor: "pointer" }}
    //                 />
    //               </div>
    //               <div
    //                 className="p-1 m-1  rounded"
    //                 style={{ backgroundColor: "#072541" }}
    //               >
    //                 {" "}
    //                 <FavoriteBorderOutlined
    //                   fontSize="medium"
    //                   className="m-1 "
    //                   color="error"
    //                   style={{ cursor: "pointer" }}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))
    //   ) : isLoading ? (
    //     <div
    //       className="d-flex flex-wrap col-12 justify-content-around"
    //       style={{ position: "relative" }}
    //     >
    //       <Stack
    //         spacing={1}
    //         className={` text-decoration-none  m-2 col-lg-3 col-md-5 col-sm-10 col-10`}
    //       >
    //         {/* For variant="text", adjust the height via font-size */}
    //         <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    //         {/* For other variants, adjust the size with `width` and `height` */}

    //         <Skeleton variant="rectangular" height={100} />
    //         <Skeleton variant="rounded" height={100} />
    //         <div className="d-flex justify-content-end">
    //           <Skeleton variant="circular" width={40} height={40} />
    //           <Skeleton variant="circular" width={40} height={40} />
    //         </div>
    //       </Stack>
    //       <Stack
    //         spacing={1}
    //         className={`${Style.parantProduct} text-decoration-none  m-2 col-lg-3 col-md-5 col-sm-10 col-10`}
    //       >
    //         {/* For variant="text", adjust the height via font-size */}
    //         <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    //         {/* For other variants, adjust the size with `width` and `height` */}

    //         <Skeleton variant="rectangular" height={100} />
    //         <Skeleton variant="rounded" height={100} />
    //         <div className="d-flex justify-content-end">
    //           <Skeleton variant="circular" width={40} height={40} />
    //           <Skeleton variant="circular" width={40} height={40} />
    //         </div>
    //       </Stack>
    //       <Stack
    //         spacing={1}
    //         className={`${Style.parantProduct} text-decoration-none  m-2 col-lg-3 col-md-5 col-sm-10 col-10`}
    //       >
    //         {/* For variant="text", adjust the height via font-size */}
    //         <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    //         {/* For other variants, adjust the size with `width` and `height` */}

    //         <Skeleton variant="rectangular" height={100} />
    //         <Skeleton variant="rounded" height={100} />
    //         <div className="d-flex justify-content-end">
    //           <Skeleton variant="circular" width={40} height={40} />
    //           <Skeleton variant="circular" width={40} height={40} />
    //         </div>
    //       </Stack>
    //       <Stack
    //         spacing={1}
    //         className={`${Style.parantProduct} text-decoration-none  m-2 col-lg-3 col-md-5 col-sm-10 col-10`}
    //       >
    //         {/* For variant="text", adjust the height via font-size */}
    //         <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    //         {/* For other variants, adjust the size with `width` and `height` */}

    //         <Skeleton variant="rectangular" height={100} />
    //         <Skeleton variant="rounded" height={100} />
    //         <div className="d-flex justify-content-end">
    //           <Skeleton variant="circular" width={40} height={40} />
    //           <Skeleton variant="circular" width={40} height={40} />
    //         </div>
    //       </Stack>
    //     </div>
    //   ) : (
    //     <img src={error} className="w-100 h-100" />
    //   )}
    // </div>
    <div id="default-styled-tab-content">
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 "
        id="styled-profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Profile tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="styled-dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="styled-settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="styled-contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>
  );
};

export default Products;
