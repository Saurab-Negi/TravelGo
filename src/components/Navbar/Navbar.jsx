import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { StoreContext } from "../Context/StoreContext";
import Logo from "../../assets/logo.png";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Best Places", link: "/best-places" },
];

const Navbar = ({ handleOrderPopup }) => {
  const { getTotalCartAmt } = useContext(StoreContext);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("loggedIn") === "true");
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status from localStorage
    const loggedInStatus = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
      <div className="container py-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 font-bold text-2xl">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="" className="h-16" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-12 sm:text-lg">
              {NavbarLinks.map((link) => (
                <li key={link.name} className="py-4">
                  <NavLink to={link.link} activeclassname="active">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="relative">
              <Link to="/cart">
                <FaCartShopping className="text-2xl text-gray-600 cursor-pointer" />
              </Link>
              {getTotalCartAmt() > 0 && (
                <div className="absolute w-2 h-2 bg-red-600 rounded-full -top-2 -right-2"></div>
              )}
            </div>
            {isLoggedIn ? (
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-primary transition-all duration-600 text-white px-4 py-1 rounded-full"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-primary transition-all duration-600 text-white px-4 py-1 rounded-full"
                onClick={handleOrderPopup}
              >
                Log In
              </button>
            )}
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
