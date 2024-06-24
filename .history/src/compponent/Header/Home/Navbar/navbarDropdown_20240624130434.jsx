import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavbarDropdown = () => {
  const darkMode=()=>{
    localStorage.setItem("theme" , 'dark') 
    document.documentElement.classList.add('dark')

  }
  const lightMode=()=>{
    localStorage.removeItem("theme" , 'dark') 
    document.documentElement.classList.remove('dark')

  }
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
useEffect(()=>{
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
},[])

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
  return (
    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        className="flex items-center text-sm px-2 dark:bg-gray-50 bg-gray-200 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
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
          className="w-3 m-2 h-2 text-gray-800 dark:text-gray-900"
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
        className="z-50 hidden my-4 text-base list-none
         bg-gray-50 
         dark:bg-gray-900 divide-y
         text-gray-900
         dark:
         fw-bolder
          divide-gray-100 rounded-lg shadow 
          dark:divide-gray-600"
        id="user-dropdown"
      >
        <div className="px-4 py-3  dark:text-gray-300  ">
          <span className="block text-sm ">Eslam Khial</span>
          <span className="block text-sm  ">eslamkhial1997@gmail.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li className="dark:text-gray-200">
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:bg-gray-700 dark:hover:bg-gray-600  hover:text-gray-50"
            >
              Dashboard
            </a>
          </li>
          <li className="dark:text-gray-200">
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:bg-gray-700 dark:hover:bg-gray-600  hover:text-gray-50"
            >
              Dashboard
            </a>
          </li>
          <li className="dark:text-gray-200">
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:bg-gray-700 dark:hover:bg-gray-600  hover:text-gray-50"
            >
              Settings
            </a>
          </li>
          <li className="dark:text-gray-200">
            <NavLink
              to="/profile"
              className="block px-4 py-2 text-sm  hover:bg-gray-700 dark:hover:bg-gray-600  hover:text-gray-50"
            >
              Profile
            </NavLink>
          </li>
          <li className="dark:text-gray-200">
            <NavLink
              to="/profile/cart"
              className="block px-4 py-2 text-sm  hover:bg-gray-700 dark:hover:bg-gray-600  hover:text-gray-50"
            >
              ShoppingCart
            </NavLink>
          </li>
          <li className="dark:text-gray-200">
            <NavLink
              to="/customerService"
              className="block px-4 py-2 text-sm  hover:bg-gray-700 dark:hover:bg-gray-600  hover:text-gray-50"
            >
              Customer Service
            </NavLink>
          </li>
          <li className="dark:text-gray-200">
            <a
              href="#"
              className="block px-4 py-2 text-sm  hover:bg-gray-700 dark:hover:bg-gray-600  hover:text-gray-50"
            >
              Sign out
            </a>
          </li>

          <li className="px-4 py-2">
            {" "}
            <label
              htmlFor="filter"
              className="switch "
              aria-label="Toggle Filter"
            >
              <input type="checkbox" id="filter" />
              <span onClick={darkMode}>Dark</span>
              <span onClick={lightMode}>Light</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDropdown;
