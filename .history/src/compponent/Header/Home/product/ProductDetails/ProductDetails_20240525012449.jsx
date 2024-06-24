import React from "react";

import { useSelector } from "react-redux";
import Footer from "../../../../Footer/Footer";

import NavbarTwo from "../../Navbar/NavbarTwo";

import ProductDetailsRight from "./ProductDetailsRight";
import ProductDetailsLeft from "./ProductDetailsLeft";
import FooterBrand from "../../FooterBrand/FooterBrand";
import Rattings from "./Rattings";
const ProductDetails = () => {
  const { dataById } = useSelector((state) => state.StoreSlice);

  return (
    <div>
     
      <NavbarTwo />
      <div className="d-flex container justify-content-around mb-2 mt-5 flex-wrap">
        <ProductDetailsLeft />
        <ProductDetailsRight />
      </div>
      <Rattings />
      <FooterBrand />
      <Footer />
    </div>
  );
};

export default ProductDetails;
