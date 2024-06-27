import { useState } from "react";

const Catalog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <li onClick={()=>{console.log("Clicked")}} className="hover:bg-gray-200 relative rounded-xl dark:hover:bg-gray-500 dark:text-gray-50 text-gray-950  hover:text-blue-500 dark:hover:text-blue-300">
      <button
        id="mega-menu-icons-dropdown-button"
        onClick={handleDropdownToggle}
        data-dropdown-toggle="mega-menu-icons-dropdown"
        className="flex items-center justify-between w-full py-2 px-3 font-medium  md:w-auto hover:bg-gray-200 rounded-xl  md:border-0  md:p-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Company
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md">
          {/* Dropdown content here */}
        </div>
      )}
      
    </li>
  );
};

export default Catalog;
