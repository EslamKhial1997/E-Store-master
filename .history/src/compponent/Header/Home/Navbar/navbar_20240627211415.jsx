import { NavLink } from "react-router-dom";
import Catalog from "./Catalog";

const NavbarCanter = () => {
  return (
    <>
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
