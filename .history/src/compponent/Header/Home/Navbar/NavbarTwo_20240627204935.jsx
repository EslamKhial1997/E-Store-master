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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className=" hidden md:flex lg:flex bg-danger ">
        <ul className="menu menu-horizontal px-1 relative left-6">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
              <li>
                <a>Solutions</a>
                <ul>
                  <li><a>Design</a></li>
                  <li><a>Development</a></li>
                  <li><a>Hosting</a></li>
                  <li><a>Domain register</a></li>
                </ul>
              </li>
              <li>
                <a>Enterprise</a>
                <ul>
                  <li><a>CRM software</a></li>
                  <li><a>Marketing management</a></li>
                  <li><a>Security</a></li>
                  <li><a>Consulting</a></li>
                </ul>
              </li>
              <li>
                <a>Products</a>
                <ul>
                  <li><a>UI Kit</a></li>
                  <li><a>Wordpress themes</a></li>
                  <li><a>Wordpress plugins</a></li>
                  <li>
                    <a>Open source</a>
                    <ul>
                      <li><a>Auth management system</a></li>
                      <li><a>VScode theme</a></li>
                      <li><a>Color picker app</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a>Company</a>
                <ul>
                  <li><a>About us</a></li>
                  <li><a>Contact us</a></li>
                  <li><a>Privacy policy</a></li>
                  <li><a>Press kit</a></li>
                </ul>
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
