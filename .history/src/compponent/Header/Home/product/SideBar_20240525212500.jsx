import React from "react";
import Style from "../Home.module.css";
import { Skeleton } from "@mui/material";
import img from "../profile/laptop.png";
import img2 from "../profile/trinix.png";
const SideBar = () => {
  return (
    // <div className="col-12 text-start p-2 ">
    //   <strong>Most Populate</strong>
    //   <div
    //     className={`${Style.SideBar}  d-flex d-lg-block d-md-flex d-sm-flex`}
    //     style={{ overflow: "scroll" }}
    //   >
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //     <div
    //       className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
    //        border border-bottom  shadow-lg ${Style.Popular}`}
    //     >
    //       <div
    //         className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
    //         style={{ maxHeight: "100px" }}
    //       >
    //         {" "}
    //         <div className="col-lg-5 col-10 h-75 ">
    //           {" "}
    //           <img src={img} className="w-100 h-100 rounded" />
    //         </div>
    //         <span className="col-lg-6 text-truncate " style={{ width: "5em" }}>
    //           Laptop
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="col-12 text-start p-2 ">
    <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
  <span className="sr-only">Open sidebar</span>
  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
</button>
     
  );
};

export default SideBar;
