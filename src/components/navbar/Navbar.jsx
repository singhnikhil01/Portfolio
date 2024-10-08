import React, { useState, useEffect } from "react";
import { logo } from "../../assets/index";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".menu-button")
      ) {
        closeMenu();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-full h-full sticky z-50 top-0  mx-auto font-titleFont border-b-[1px] border-gray-900  bg-slate-950 border-l-0">
        <div className="h-20 md:h-20 flex justify-between items-center px-4 md:px-8 lg:mx-10">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 md:w-20 md:h-20 hover:cursor-pointer"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-4 md:space-x-6">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  className="text-white  text-xl tracking-wide cursor-pointer transition duration-300 ease-in-out transform hover:text-white/50 hover:brightness-110 hover:scale-105"
                  key={_id}
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="menu-button text-gray-400 hover:text-designColor"
              onClick={handleMenuToggle}
            >
              <span className="text-xl  w-8 h-8  text-white inline-flex justify-center items-center">
                <i className="fi fi-br-menu-burger"></i>
              </span>
            </button>
          </div>
        </div>

        <div
          className={`w-[60vw] md:hidden fixed top-20 right-0 bg-bodyColor p-4 mobile-menu-container shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-3">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-white text-lg tracking-wide cursor-pointer hover:text-designColor transition duration-300"
                key={_id}
                onClick={closeMenu}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-lg"
                  onClick={closeMenu}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
