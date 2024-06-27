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
    <div className="navbar bg-base-100">
      <div className="">
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Inbox
          <span className="badge badge-sm">99+</span>
        </a>
      </li>
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Updates
          <span className="badge badge-sm badge-warning">NEW</span>
        </a>
      </li>
      <li>
        <a>
          Stats
          <span className="badge badge-xs badge-info"></span>
        </a>
      </li>
    </ul>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className=" hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
     <div>
   
     <div className="dropdown dropdown-end  btn-circle m-3">
       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
         <div className="indicator">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
           </svg>
           <span className="badge badge-sm ">8</span>
         </div>
       </div>
       <div
         tabIndex={0}
         className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
         <div className="card-body">
           <span className="text-lg font-bold">8 Items</span>
           <span className="text-info">Subtotal: $999</span>
           <div className="card-actions">
             <button className="btn btn-primary btn-block">View cart</button>
           </div>
         </div>
       </div>
     </div>
     <div className="dropdown dropdown-end">
       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
         <div className="w-10 ">
           <img
           className="rounded-full"
             alt="Tailwind CSS Navbar component"
             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
         </div>
       </div>
       <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li>
           <a className="justify-between">
             Profile
             <span className="badge">New</span>
           </a>
         </li>
         <li><a>Settings</a></li>
         <li><a>Logout</a></li>
       </ul>
     </div>
   </div>
     
    </div>
  );
};

export default NavbarTwo;