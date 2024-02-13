import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuItems from "../../../../data/HomePage/NavbarmenueData";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="m-4 absolute z-30">
      <button
        onClick={toggleMenu}
        className="flex items-center middle none center mr-3 rounded-lg bg-gradient-to-tr bg-DarkBlue py-3 px-6 font-sans text-xs font-bold uppercase text-Gold2 shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <div className="flex">
          <div className="font-serif text-lg">
            {isMenuOpen ? "إغلاق" : "القائمة"}
          </div>
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-6 mr-2">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            )}
          </svg>
        </div>
      </button>
      {isMenuOpen && (
        <ul
          role="menu"
          data-popover="menu"
          data-popover-placement="bottom"
          className="absolute  z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <Link to={item.link} className="text-blue-400">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
