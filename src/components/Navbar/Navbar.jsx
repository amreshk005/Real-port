import React from "react";
import style from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#575757",
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
              <li>
                <Link style={linkStyle} activeClass="active" to="aboutMe" spy={true} smooth={true} duration={250}>
                  About me
                </Link>
              </li>
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
