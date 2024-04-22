/* eslint-disable no-unused-vars */
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="lg:mt-10 mt-50 lg:w-1/2">
        <h1 className="font-courierprime text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className="font-opensans text-dark-light mt-4 text-center md:text-xl lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          dictum, dolor sed sodales vestibulum, ante elit tempor nulla, et
          faucibus turpis felis a mauris. Duis sodales nisl nec dolor tincidunt.
        </p>

        <div className="flex flex-col gap-y-2.5 mt-10 relative">
          <div className="relative">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="font-opensans placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[0_20px_40px_rgba(8,_112,_184,_0.7)] md:py-4"
              type="text"
              placeholder="Search article"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>

        <div className="flex mt-8 flex-col lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-8">
          <span className="font-opensans text-dark-light font-semibold italic mt-2 lg:mt-4">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3">
            <li className="font-opensans rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="font-opensans rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="font-opensans rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
