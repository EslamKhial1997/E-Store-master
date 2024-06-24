import { NavLink } from "react-router-dom";
import Catalog from "./Catalog";

const NavbarCanter = () => {
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
      id="navbar-search"
    >
      <div className="relative mt-3 md:hidden"></div>
      <ul className="flex flex-col md:p-0  font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="hover:bg-gray-200 rounded-xl dark:hover:bg-gray-500 ">
          <NavLink
            to="/"
            end
            className="block py-2 px-3   dark:hover:text-gray-50 text-blue-500 rounded md:bg-transparent  md:p-0 "
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <Catalog />
        <li className="hover:bg-gray-200 rounded-xl dark:hover:bg-gray-500 dark:text-gray-50 text-gray-950  hover:text-blue-500 dark:hover:text-blue-300">
          <a
            href="#"
            className="block py-2 px-3 dark:text-gray-50 text-gray-950 rounded hover:text-blue-500 "
          >
            About
          </a>
        </li>
        <li className="hover:bg-gray-200 rounded-xl dark:hover:bg-gray-500 dark:text-gray-50 text-gray-950  hover:text-blue-500 dark:hover:text-blue-300">
          <a
            href="#"
             className="block py-2 px-3 "
          >
            Services
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarCanter;
