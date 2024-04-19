/* eslint-disable no-unused-vars */
import React from "react";
import { images } from "../constants";

const Header = () => {
  return (
    <section>
      <header>
        <div>
          <img src={images.Logo} alt="Logo" />
        </div>
        <div></div>
      </header>
    </section>
  );
};

export default Header;
