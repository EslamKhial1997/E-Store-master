import SideBar from "./SideBar";
import Products from "./Products";
import Style from "../Home.module.css";
import NavbarProduct from "./NavbarProduct";
const ParentProduct = () => {
  return (
    <div className="bg-gray-900 py-3">
    
    <h1

      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2 hidden  md:block lg:block col-12   sticky-top">
          {" "}
          <SideBar />
        </div>
        <div className="col-lg-9 col-12 bg-light">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ParentProduct;
