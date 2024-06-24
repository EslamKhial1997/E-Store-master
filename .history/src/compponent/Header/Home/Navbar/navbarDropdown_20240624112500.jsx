import { NavLink } from "react-router-dom";

const NavbarDropdown = () => {
  return (
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="flex items-center text-sm px-2 bg-gray-50 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="user photo"
        />
        <svg
          className="w-3 m-2 h-2 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </button>

      <div
        className="z-50 hidden my-4 text-base list-none bg-gray-900 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Eslam Khial
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            eslamkhial1997@gmail.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 hover:text-gray-900"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/cart"
              className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              ShoppingCart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customerService"
              className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Customer Service
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>

        <li className="px-4 py-2">  <label htmlFor="filter" className="switch " aria-label="Toggle Filter">
        <input type="checkbox" id="filter" />
        <span>Dark</span>
        <span>Light</span>
      </label></li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDropdown;
