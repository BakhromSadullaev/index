import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import style from "./Navbar.module.scss";

import logo from "../../../assets/images/INDEX-removebg-preview.png";

const Navbar = () => {
  return (
    <nav>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={style.menu}>
        <MenuIcon />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Curriculum</li>
        <li>Contact</li>
      </ul>

      <button>Free Trial Class</button>
    </nav>
  );
};

export default Navbar;
