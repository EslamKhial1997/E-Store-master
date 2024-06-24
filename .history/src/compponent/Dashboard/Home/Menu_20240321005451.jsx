import { Divider, List, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import Style from "./Home.module.css";
import {
  Category,
  BrandingWatermark,
  Person,
  Person4,
  ProductionQuantityLimits,
  Settings,
  Shop,
  Transcribe,
  ContactEmergency,
  CircleNotifications,
} from "@mui/icons-material";
import DiscountIcon from "@mui/icons-material/Discount";

const Menu = () => {
  return (
    <div>
      <Toolbar className="d-flex flex-wrap justify-content-center align-items-center">
        <p className={Style.admin}> Dashboard</p>
      </Toolbar>
      <Divider />
      <List
        className={`bg-light d-flex flex-wrap border rounded navbarLeft  fw-normal `}
      >
        <NavLink
          to={"/dashboard/DashBoardCategory"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 border  rounded"
          }
          end
        >
          <div className="d-flex justify-content-start align-items-center">
            <Category className="m-2" />
            Category
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/DashBoardSubCategory"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 border rounded "
          }
        >
          {" "}
          <div className="d-flex justify-content-start align-items-center">
            <ContactEmergency className="m-2" />
            Subcategories
          </div>
        </NavLink>

        <NavLink
          to={"/dashboard/DashBoardBrands"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 border rounded "
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <BrandingWatermark className="m-2" />
            Brand
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/DashBoardProduct"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 border rounded "
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <ProductionQuantityLimits className="m-2" />
            Product
          </div>
        </NavLink>

        <NavLink
          to={"/dashboard/DashBoardUser"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 p-2 border rounded"
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <Person className="m-2" />
            Users
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/DashBoardCoupon"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 p-2 border rounded"
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <DiscountIcon className="m-2" />
            Coupons
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/DashBoardNotification"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 p-2 border rounded"
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <CircleNotifications className="m-2" />
            Notification
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/user"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 p-2 border rounded"
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <Person4 className="m-2" />
            Customer
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/user"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 p-2 border rounded"
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <Transcribe className="m-2" />
            Transication
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard/user"}
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 p-2 border rounded"
          }
        >
          <div className="d-flex justify-content-start align-items-center">
            <Shop className="m-2" />
            Orders
          </div>
        </NavLink>
        <NavLink
          className={
            "text-dark fw-bold text-decoration-none col-12 p-2 p-2 border rounded"
          }
          to={"/dashboard/user"}
        >
          {" "}
          <div className="d-flex justify-content-start align-items-center">
            <Settings className="m-2" />
            Settings
          </div>
        </NavLink>
      </List>
    </div>
  );
};

export default Menu;
