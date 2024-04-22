/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
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
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
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
              {item.items.map((page) => (
                <a
                  href="/"
                  className="lg:hover:bg-dark-hard hover:bg-dark-soft hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
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
          <h1 className="font-courierprime text-2xl lg:text-3xl md:text-3xl xl:text-3xl text-dark-hard">
            typosphere.
          </h1>
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
          <ul className="text-white font-opensans text-base items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="font-opensans text-sm mt-5 lg:mt-0 border-2 border-primary px-6 py-2 rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
