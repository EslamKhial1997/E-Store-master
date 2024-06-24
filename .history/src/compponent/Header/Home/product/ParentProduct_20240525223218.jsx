import SideBar from "./SideBar";
import Products from "./Products";
import Style from "../Home.module.css";
import NavbarProduct from "./NavbarProduct";
const ParentProduct = () => {
  return (
    <div className="bg-gray-900 py-3">
    
      <NavbarProduct />

      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2  col-12 lg:h-screen md:">
          {" "}
          <SideBar />
        </div>
        <div className="col-lg-9 col-12 h-screen ">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ParentProduct;
