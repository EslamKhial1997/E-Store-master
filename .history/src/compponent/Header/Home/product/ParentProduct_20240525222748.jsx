import SideBar from "./SideBar";
import Products from "./Products";
import Style from "../Home.module.css";
import NavbarProduct from "./NavbarProduct";
const ParentProduct = () => {
  return (
    <div className="bg-gray-900 py-3">


      <div className="d-flex justify-content-around flex-wrap relative-0">
      
        {" "}
        <div className="col-lg-2  col-12 ">
        
          {" "}
          <SideBar />
        </div>
        <div className="col-lg-9 col-12 absolute top-0">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ParentProduct;
