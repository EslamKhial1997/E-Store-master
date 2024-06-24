import Style from "../Home.module.css";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import InventoryIcon from "@mui/icons-material/Inventory";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import BusinessIcon from "@mui/icons-material/Business";
import PaymentsIcon from "@mui/icons-material/Payments";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SecurityIcon from "@mui/icons-material/Security";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LogoutIcon from "@mui/icons-material/Logout";

import { NavLink } from "react-router-dom";
import { ConnectWithoutContact, Shop } from "@mui/icons-material";
const ProfileLeft = () => {
  return (
    <div className="col-12 text-start p-2 h-screen over">
      <div className="d-flex flex-wrap p-2 text-dark" style={{ maxHeight: "75px" }}>
        <strong className="col-12">Eslam Ahmed</strong>
        <small className="col-12">eslamkhial1997@gmail.com</small>
      </div>
      <div
        className={`${Style.SideBar} text-light SideBar d-flex d-lg-block d-md-flex d-sm-flex`}
        style={{ overflow: "scroll" }}
      >
      <NavLink
          end
          to={"/profile"}
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10">
              {" "}
              <AccountCircleIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Profile</strong>
          </div>
        </NavLink>
        <NavLink
          to={"qrcode"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
              shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <QrCodeIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">QrCode</strong>
          </div>
        </NavLink>
        <NavLink
        to={"Wishlist"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <ThumbsUpDownIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Wishlist</strong>
          </div>
        </NavLink>
        <NavLink
        to={"cart"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <Shop fontSize="large" color="warning" />
              
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">ShopCart</strong>
          </div>
        </NavLink>
        <NavLink
          to={"orders"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <InventoryIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Orders</strong>
          </div>
        </NavLink>
        <NavLink
        to={"returns"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <KeyboardReturnIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Returns</strong>
          </div>
        </NavLink>
        <NavLink
          to={"addrees"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <BusinessIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Addresses</strong>
          </div>
        </NavLink>
        <NavLink
          to={"payment"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <PaymentsIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Payments</strong>
          </div>
        </NavLink>
        <NavLink
          end
          to={"/giftcard"}
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <CardGiftcardIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Gift Cards</strong>
          </div>
        </NavLink>
        
        <NavLink
        to={"notification"}
          end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <CircleNotificationsIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Notification</strong>
          </div>
        </NavLink>
        <NavLink
          end
          to={"securitySetting"}
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <SecurityIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">Security Settings</strong>
          </div>
        </NavLink>
        <NavLink
        to={"contactus"}
        end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <ContactPhoneIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10  text-xs sm:text-lg md:text-base ">Contact Us</strong>
          </div>
        </NavLink>
        <NavLink
        to={"customerService"}
        end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <ConnectWithoutContact fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10  text-xs sm:text-lg md:text-base ">Customer Service</strong>
          </div>
        </NavLink>
        <NavLink
        to={"logout"}
        end
          className={`col-lg-12 col-3 justify-content-lg-between justify-content-center d-flex mx-1 m-2 mx-lg-0 rounded bg-gray-700
          shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-300`}
        >
          <div className="w-100 justify-content-lg-between align-items-center justify-content-center d-flex flex-wrap p-2 text-center rounded ">
            {" "}
            <div className="col-lg-1 col-10 ">
              {" "}
              <LogoutIcon fontSize="large" color="warning" />
            </div>
            <strong className="col-lg-11 col-10 text-xs sm:text-lg md:text-base ">LogOut</strong>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileLeft;
