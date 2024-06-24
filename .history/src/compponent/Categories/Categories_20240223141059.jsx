import React from "react";
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
import NavbarOne from "../Header/Home/Navbar/NavbarOne";
import NavbarTwo from "../Header/Home/Navbar/NavbarTwo";
import HeighSale from "../Header/Home/heighSale/HeighSale";

import Brands from "../Header/Home/brands/Brands";
import SortIcon from "@mui/icons-material/Sort";
import FooterBrand from "../Header/Home/FooterBrand/FooterBrand";
import CategoriesNavBar from "./CategoriesNavBar";
import Footer from "../Footer/Footer";
const Categories = () => {
  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <HeighSale />

      <CategoriesNavBar />
      <div className="container-fluid d-flex flex-wrap justify-content-around mt-3">
        <div className="col-lg-2 col-12">
          {" "}
          <CategoryLeft />
        </div>

        <div className="col-lg-9 col-12">
          <CategoryRight />
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div>
  );
};

export default Categories;
