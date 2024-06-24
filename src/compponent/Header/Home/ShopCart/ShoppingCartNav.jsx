import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import img from "../../img/carousel-1.jpg";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";
const ShoppingCartNav = ({ open, toggle }) => {
  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100vh", overflowY: "scroll" }}
      role="presentation"
      onClick={() => {
        toggle(false);
      }}
      className="SideBarProduct"
    >
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <List className="border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <img
            src={img}
            className="rounded"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="text-center">
            <span className="d-block fw-bolder">Esmail</span>
            <span className="d-block">1500</span>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <Rating name="size-medium" defaultValue={2} /> <span>(3.5k)</span>
        </div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        open={open}
        onClose={() => {
          toggle(false);
        }}
        anchor="right"
      >
        <h3 className="text-center p-2 border-bottom border-3 border-dark">
          E-Store Shop Cart
        </h3>
        {DrawerList}
        <NavLink className="btn bg-warning rounded text-light" to={"/profile/cart"}>
          Go To Cart
        </NavLink>
      </Drawer>
    </div>
  );
};

export default ShoppingCartNav;
