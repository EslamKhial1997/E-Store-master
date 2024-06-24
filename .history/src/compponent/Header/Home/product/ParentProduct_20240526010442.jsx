import SideBar from "./SideBar";
import Products from "./Products";
import Style from "../Home.module.css";
import NavbarProduct from "./NavbarProduct";
import PaginationHome from "../utils/PaginationHome";
const ParentProduct = () => {
  return (
    <div className="bg-gray-900 py-3">
    
      <NavbarProduct />

      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2 hidden lg:flex col-12 ">
          {" "}
          <SideBar />
        </div>
        <div className="col-lg-9 col-12 h-screen overflow-scroll SideBarProduct">
      <div className="flex">  <h1 className="my-3 text-light">Product Items </h1> <span className="text-light">:25 Result</span></div>
          <Products />
        </div>
        <PaginationHome/>
      </div>
    </div>
  );
};

export default ParentProduct;
