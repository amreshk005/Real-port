import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  function getScroll(getTop) {
    window.scrollTo({ left: 0, top: getTop, behavior: "smooth" });
  }

  function scrollHandler(e) {
    let type = e.target.getAttribute("name");
    switch (type) {
      case "about":
        getScroll(700);
        break;
      case "portfolio":
        getScroll(1350);
        break;
      case "contact":
        getScroll(4000);
        break;
      default:
        break;
    }
  }

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
              <li name="about" onClick={scrollHandler}>
                About me
              </li>
              <li name="portfolio" onClick={scrollHandler}>
                Portfolio
              </li>
              <li name="contact" onClick={scrollHandler}>
                Contact
              </li>
              <li>Toggle</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
