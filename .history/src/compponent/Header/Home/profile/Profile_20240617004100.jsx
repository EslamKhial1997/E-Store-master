import { Outlet, useNavigate } from "react-router-dom";
import ProfileLeft from "./ProfileLeft";

import NavbarTwo from "../Navbar/NavbarTwo";
import Footer from "../../../Footer/Footer";
import { useEffect } from "react";

const Profile = () => {

    useEffect(() => {
  
  }, []);
 
  return (
    <div className=" bg-gray-200">
   
    <NavbarTwo/>
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2  col-12 bg-light  rounded ">
          {" "}
          <ProfileLeft />
        </div>
        <div className="col-lg-9 col-12 bg-light rounded">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
