import React, { useState, useEffect } from "react";
import menuItems from "../../../../data/HomePage/NavbarmenueData";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  // Add event listener to update menu state when screen width changes
  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-2 bg-DarkBlue shadow-sm">
      <div className="flex flex-col justify-between h-auto max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row   items-center justify-between ">
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={toggleMenu}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <img
            src="../../../../../src/assets/logo.png"
            alt=""
            className="h-16 w-32 "
          />
        </div>
        <nav
          className={`flex-col justify-end flex-grow pb-4 md:pb-0 md:flex   md:flex-row ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-blue-600 md:inline-block py-2 px-4 mt-2 text-xl font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
