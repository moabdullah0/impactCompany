import { useState } from "react";
import { motion } from "framer-motion";
import land from "../../../../assets/2.png";
import menuItems from "../../../../data/HomePage/NavbarData";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeProviders } from "../../../../App";

const Navbar = ({ setMode, theme }: ThemeProviders) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (itemId: string) => {
    setSelectedMenuItem(itemId);

    setMobileMenuOpen(false);
  };

  const menuClassName = `items-center sm:justify-between  md:flex md:w-auto md:order-1 w-[120%]   ${
    isMobileMenuOpen ? "  block" : "hidden"
  } `;

  return (
    <motion.nav
      dir="rtl"
      className={`"  px-2 fixed w-full z-20 top-0 start-0  border-gray-200   " `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <motion.a
          className="flex items-center space-x-3 rtl:space-x-reverse"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={land} className="h-16" alt="Flowbite Logo" />
          <div className="rounded-full bg-gradient-to-r from-blue-300 rotate-[-90deg] w-[2%] h-[20%] mt-40 z-3 absolute lg:right-[12%] lg:top-[-90%] lg:block hidden sm:hidden "></div>

          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Impact
          </span>
        </motion.a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <motion.a
            type="button"
            className=" xl:block sm:hidden md:hidden lg:block text-blue-500 border border-blue-300 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:bg-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() =>
              setMode(theme.palette.mode == "light" ? "dark" : "light")
            }
          >
            <DarkModeIcon />
          </motion.a>
          <motion.button
            onClick={handleMobileMenuToggle}
            type="button"
            className=" lg:hidden sm:block   items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
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
          </motion.button>
        </div>
        <motion.div
          className={menuClassName}
          id="navbar-sticky"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-bold text-xl `}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={` `}
              >
                <a
                  className={`block py-2 px-3 ${item.bgColor} rounded ${
                    item.hoverClass
                  } md:bg-transparent md:p-0   ${
                    selectedMenuItem === item.id ? "font-bold" : ""
                  }`}
                  aria-current={index === 0 ? "page" : undefined}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.text}
                </a>
              </motion.li>
            ))}
            <motion.a
              href="https://wa.me/+352681538889"
              type="button"
              className="mx-2 xl:block bg-blue-500  sm:hidden md:hidden lg:block  border border-blue-300 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:bg-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              تواصل معنا
            </motion.a>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
