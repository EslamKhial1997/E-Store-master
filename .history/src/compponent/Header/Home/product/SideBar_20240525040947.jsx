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
      <form className="flex items-center max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <div
        className={`${Style.SideBar}  d-flex d-lg-block d-md-flex d-sm-flex`}
        style={{ overflow: "scroll" }}
      >
        
      <button id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom" class="me-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown bottom <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
      </button>
      
      
      <div id="dropdownBottom" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBottomButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
      </div>
       
        
        
      </div>
    </div>
  );
};

export default SideBar;
