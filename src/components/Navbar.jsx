import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import Cookies from "js-cookie";
import axios from "axios";
import routes from "../routes";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const auth = { user: true };

  const logoutHandler = async (e) => {
    e.preventDefault();
    await axios.post(`${routes.baseUrl}/logout`);
    auth.setUser(null);
    Cookies.remove("user");

    window.location.reload();
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href="" className="text-white text-2xl">
                <Brand />
              </a>
            </div>
            <div className="hidden sm:block sm:mx-auto">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white px-3 py-2 border-b text-sm font-bold"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-100 font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm"
                >
                  Popular Destinations
                </a>
                <a
                  href="#"
                  className="text-gray-100 font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm"
                >
                  Holiday Packages
                </a>
                <a
                  href="#"
                  className="text-gray-100 font-bold hover:bg-gray-700 hover:text-white px-3 py-2 text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!auth.user ? (
              <Link
                to="/login"
                className="text-white bg-black rounded-md px-6 py-1 font-bold"
              >
                Sign In
              </Link>
            ) : (
              <>
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <div className="ml-3 relative user-settings">
                  <div>
                    <button
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                      onClick={() => setMenu(!menu)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {menu && (
                      <motion.div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>
                        <a
                          href=""
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={(e) => logoutHandler(e)}
                        >
                          Sign out
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}{" "}
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-white block px-3 py border--2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Popular Destination
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Holiday Packages
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Manage Bookings
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
