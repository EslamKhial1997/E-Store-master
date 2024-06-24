import SideBar from "./SideBar";
import Products from "./Products";
import Style from "../Home.module.css";
import NavbarProduct from "./NavbarProduct";
import PaginationHome from "../utils/PaginationHome";
import { Suspense } from "react";
const ParentProduct = () => {
  return (
    <div className=" py-3">
      <NavbarProduct />

      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2 hidden lg:flex col-12 bg-gray-800 rounded-xl">
          {" "}
          <SideBar />
        </div>
        <div className="col-lg-9 col-12 h-screen overflow-scroll  SideBarProduct relative">
          <div className="lg:flex hidden m-auto content-between rounded-xl bg-gradient-to-r from-gray-500  align-items-center">
            <h3 className="my-3 p-2 col-3 text-light fw-bold">Results:20 </h3>
            <form className="col-5">
              
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>filter Product</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <Suspense fallback={<h1>Loadingg..........................</h1>}><Products /></Suspense>
        </div>
        <PaginationHome />
      </div>
    </div>
  );
};

export default ParentProduct;
