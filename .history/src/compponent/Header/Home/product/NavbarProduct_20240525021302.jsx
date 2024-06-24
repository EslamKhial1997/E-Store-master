import React from "react";

const NavbarProduct = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto ">
        <ul className="flex flex-col p-2 md:p-0  font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
          <li>
            <a
              href="#"
              className="block fw-bolder size-10 py-2 px-3 text-dark bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarProduct;
