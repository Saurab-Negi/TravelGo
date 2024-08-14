import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">

        <div className="container py-3 sm:py-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="" className="h-16" />
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-12 sm:text-lg">
                <li className="py-4">
                  <NavLink to="/" activeclassname="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeclassname="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/best-places" activeclassname="active">
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeclassname="active">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-8">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-4 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Log In
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
