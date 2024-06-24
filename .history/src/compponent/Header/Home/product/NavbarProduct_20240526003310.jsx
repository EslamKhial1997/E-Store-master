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
        </div>
   
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto ">
        <ul className="flex gap-2 flex-wrap p-2 md:p-0 font-medium   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
          <li className="border rounded-xl">
            <a
              href="#"
              className="block py-2 px-3 text-white bg-gray-700  rounded-xl md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              Categories
            </a>
          </li>
          <li className="border rounded-xl">
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              SubCategories
            </a>
          </li>
          <li className="border rounded-xl">
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Brands
            </a>
          </li>
          <li className="border rounded-xl">
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarProduct;
