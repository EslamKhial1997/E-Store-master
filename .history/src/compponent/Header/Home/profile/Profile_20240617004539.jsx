import { Outlet, useNavigate } from "react-router-dom";
import ProfileLeft from "./ProfileLeft";

import NavbarTwo from "../Navbar/NavbarTwo";
import Footer from "../../../Footer/Footer";
import { useEffect } from "react";
import Cookies from "cookies-js";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedData } from "../../../Store/loggedUserController";
const Profile = () => {
const dispatch = useDispatch()
const {data} = useSelector((state)=>state.StoreSliceUser);
console.log(data);
    useEffect(() => {
     const token = Cookies.get('token');
if (token ) {
  dispatch(getLoggedData(token))
}
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
