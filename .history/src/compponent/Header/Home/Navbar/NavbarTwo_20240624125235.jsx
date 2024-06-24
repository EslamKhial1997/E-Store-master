

// import io from "socket.io-client";
import { NavLink } from "react-router-dom";
import NavbarCanter from "./navbar";
import NavbarDropdown from "./navbarDropdown";


// const socket = io.connect("http://localhost:8008");
const NavbarTwo = () => {
  // const removeToken = () => {
  //   localStorage.removeItem("token");
  // };

  return (
    <nav className="dark:bg-gray-900 bg-gray-50  border-gray-200  p-3">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
    <NavLink to={"/"}
    
    className="flex items-center space-x-3 rtl:space-x-reverse"
    >
    <div style={{width:"100px"}}> 
    <select
    </div>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gray-900">
            E-Store
          </span>
        </NavLink>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <NavbarDropdown />
        </div>

        <NavbarCanter />
      </div>
    </nav>
  );
};

export default NavbarTwo;
