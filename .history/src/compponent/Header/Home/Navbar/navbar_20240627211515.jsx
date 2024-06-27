import { NavLink } from "react-router-dom";
import Catalog from "./Catalog";

const NavbarCanter = () => {
  return (
    <>
    <div className="">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden md:hidden bg-gray-50 dark:bg-gray-100 dark:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-100 dark:bg-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li >
              <a>Item 1</a>
            </li>
            <li >
              <a>Parent</a>
              <ul className="p-2 w-max">
                <li >
                  <a>Submenu 1</a>
                </li>
                <li >
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li >
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

    <div className=" hidden md:flex lg:flex bg-gray-200 dark:bg-gray-900 rounded-xl">
    <ul className="menu menu-horizontal px-1">
      <li className="dark:hover:bg-gray-100 rounded dark:hover:text-gray-950 hover:bg-gray-800 hover:text-gray-50">
        <a>Home</a>
      </li>
      <li className="dark:hover:bg-gray-100 rounded dark:hover:text-gray-950 hover:bg-gray-800 hover:text-gray-50">
        <a>Item 1</a>
      </li>
      <li className="dark:hover:bg-gray-100 rounded dark:hover:text-gray-950 hover:bg-gray-800 hover:text-gray-50">
        <a>Item 1</a>
      </li>
      <li className="dark:hover:bg-gray-100 rounded dark:hover:text-gray-950 hover:bg-gray-800 hover:text-gray-50">
        <details>
          <summary>Parent</summary>
          <ul className="p-2 w-max">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="dark:hover:bg-gray-100 rounded dark:hover:text-gray-950 hover:bg-gray-800 hover:text-gray-50">
        <a>Item 3</a>
      </li>
    </ul>
  </div>
    </>
  );
};

export default NavbarCanter;
