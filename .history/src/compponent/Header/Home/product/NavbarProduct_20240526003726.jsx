import { Chip } from "@mui/material";
import React from "react";

const NavbarProduct = () => {
  return (
    <nav className=" sm:flex lg:hidden  border-gray-200 bg-gradient-to-r from-slate-900">
          <Chip label="Categories" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }}/>
          <Chip label="Subcategories" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="Brands" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          
      </nav>
   
     
  );
};

export default NavbarProduct;
