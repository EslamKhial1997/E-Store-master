import React from "react";

import Brands from "./brands/Brands";
import Tranding from "./trand/Tranding";

import Footer from "../../Footer/Footer";
import HeighSale from "./heighSale/HeighSale";
import NavbarOne from "./Navbar/NavbarOne";
import NavbarTwo from "./Navbar/NavbarTwo";
import ParentSection from "../../body/ParentSection";
import ParentProduct from "./product/ParentProduct";
import FooterBrand from "./FooterBrand/FooterBrand";

const Home = () => {
  return (
    <div>
      <NavbarOne />
      <NavbarTwo />
      <HeighSale />
      <ParentSection />
      <Brands />
      <ParentProduct />
      <FooterBrand />
      <Footer />
    </div>
  );
};

export default Home;
