/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/user";

const NavItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "Faq", type: "link", href: "/faq" },
];

const NavItem = ({ item }) => {
  const [dropdown, setdropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setdropdown((currState) => {
      return !currState;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <Link to={item.href} className="px-4 py-2">
            {item.name}
          </Link>
          <span className="cursor-pointer text-dark-hard absolute transition-all duration-500 font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            {item.name}
            <span>
              <RiArrowDropDownLine />
            </span>
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full group-hover:block w-max`}
          >
            <ul className="bg-dark-hard lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="lg:hover:bg-dark-hard hover:bg-dark-soft hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navIsVisible, setNavIsVisible] = useState(false);
  const userState = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          {/* <img
            src={images.Logo}
            alt="Logo"
            className="w-24 md:w-32 lg:w-40 xl:w-48 h-auto"
          /> */}

          {/* Small Icon Logo */}
          {/* <div className="flex items-center">
            <span>
              <img
                src={images.Icon}
                alt="Icon"
                className="w-2 md:w-2 lg:w-3 xl:w-6 h-auto"
              />
            </span>
          </div> */}
          <Link to="/">
            <h1 className="font-courierprime text-2xl lg:text-3xl md:text-3xl xl:text-3xl text-dark-hard">
              typosphere.
            </h1>
          </Link>
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[68px] lg:mt-0 bg-dark-hard lg:bg-transparent  z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white text-base items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          {userState.userInfo ? (
            <div className="text-white text-base items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
              <div className="relative group">
                <div className="flex flex-col items-center">
                  <button
                    className="flex gap-x-1 items-center text-sm mt-5 lg:mt-0 border-2 border-primary px-6 py-2 rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => setProfileDropdown(!profileDropdown)}
                  >
                    <span>Account</span>
                    <RiArrowDropDownLine />
                  </button>
                  <div
                    className={`${
                      profileDropdown ? "block" : "hidden"
                    } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full group-hover:block w-max`}
                  >
                    <ul className="bg-dark-hard lg:bg-transparent flex flex-col shadow-lg rounded-lg overflow-hidden">
                      <button
                        onClick={() => navigate("/profile")}
                        type="button"
                        className="lg:hover:bg-dark-hard hover:bg-dark-soft hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Profile Page
                      </button>
                      <button
                        onClick={logoutHandler}
                        type="button"
                        className="lg:hover:bg-dark-hard hover:bg-dark-soft hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="text-sm mt-5 lg:mt-0 border-2 border-primary px-6 py-2 rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Sign In
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
