import { Outlet } from "react-router-dom";
import ProfileLeft from "./ProfileLeft";
import NavbarOne from "../Navbar/NavbarOne";
import NavbarTwo from "../Navbar/NavbarTwo";
import Footer from "../../../Footer/Footer";

const Profile = () => {
  return (
    <div className="mx-3">
    <NavbarOne/>
    <NavbarTwo/>
      <div className="d-flex justify-content-around flex-wrap ">
        {" "}
        <div className="col-lg-2  col-12 bg-light border rounded">
          {" "}
          <ProfileLeft />
        </div>
        <div className="col-lg-9 col-12 bg-light">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
