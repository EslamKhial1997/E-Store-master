import { Chip } from "@mui/material";
import React from "react";

const NavbarProduct = () => {
  return (
    <nav className=" sm:flex lg:hidden  border-gray-200 bg-gradient-to-r from-slate-900">
          <Chip label="Accesories" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }}/>
          <Chip label="Electronic" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="Fastion" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="Cloth" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="Watchs" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
          <Chip label="LapTop" variant="outlined" className="my-2 text-light"  style={{ backgroundColor: "#072541", cursor: "pointer" }} />
      </nav>
   
     
  );
};

export default NavbarProduct;
