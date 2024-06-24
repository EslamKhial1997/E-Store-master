import React from "react";

const NavbarProduct = () => {
  return (
    <nav>
      <div className="max-w-screen flex flex-wrap items-center justify-center mx-auto bg-gradient-to-r from-slate-900 ...">
        <div
          className="items-center justify-center  w-full  "
          id="navbar-search"
        >
          <ul className="flex flex-col p-2 md:p-0  font-medium  rounded-lg   md:mt-0 md:border-0 ">
            <li className="border rounded-lg ">
              <a
                href="#"
                className=" py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Category
              </a>
            </li>
            <li className="border rounded-lg ">
              <a
                href="#"
                className=" py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                SubCategory
              </a>
            </li>
            <li className="border rounded-lg ">
              <a
                href="#"
                className=" py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Brand
              </a>
            </li>
            <li className="border rounded-lg ">
              <a
                href="#"
                className=" py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Product
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarProduct;
