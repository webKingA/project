import React, { useState } from "react";
import style from "./Header.module.css";

// import Icons Start

import {FaBars} from 'react-icons/fa';

// import Icons End

const Header = () => {
  return (
    <div className={style.header__container}>
      <span>
        <FaBars />
      </span>
      <span></span>
    </div>
  );
};

export default Header;
