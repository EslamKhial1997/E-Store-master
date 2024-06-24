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
     
<form class="max-w-md mx-auto">   
<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>
    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>
</form>

      <div
        className={`${Style.SideBar}  d-flex d-lg-block d-md-flex d-sm-flex`}
        style={{ overflow: "scroll" }}
      >
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
        <div
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-white
           border border-bottom  shadow-lg ${Style.Popular}`}
        >
          <div
            className=" justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded "
            style={{ maxHeight: "100px" }}
          >
            {" "}
            <Skeleton variant="rounded" height={80} width={80} />
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
      
       
       
      
      
     
      </div>
    </div>
  );
};

export default SideBar;
