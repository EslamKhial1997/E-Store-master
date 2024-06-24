import SideBar from "./SideBar";
import Products from "./Products";
import Style from "../Home.module.css";
const ParentProduct = () => {
  return (
    <div className="m-3">
     



    
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2  col-12 bg-light border rounded sticky-top">
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
