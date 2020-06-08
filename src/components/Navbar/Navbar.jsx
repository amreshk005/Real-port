import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={style["frontpage-navbar"]}>
      <div className={style["frontpage-element"]}>
        <div className={style["frontpage-wrapped"]}>
          <div className={style["frontpage-logo"]}>
            <Link to="/">
              <img style={{ opacity: 1 }} src="/images/amresh-logo.jpeg" alt="logo" />
            </Link>
          </div>
          <div className={style["frontpage-menu"]}>
            <ul>
              <li>About me</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Toggle</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
