import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style["main-header-section"]}>
      <div className={style["main-header"]}>
        <div className={style["main-background"]} style={{ position: "relative", overflow: "hidden" }}>
          <img className={style["back-logo"]} src="/images/back-main.png" alt="back logo" />
        </div>
        <div className={style["main-elements"]}>
          <h1 className={style["main-heading-1"]}>
            Hello
            <span role="img" aria-label="cool hand emoji">
              ✌🏽
            </span>
            ,
            <br />
            I'm <span>Amresh</span>
          </h1>
          <h2 className={style["main-heading-2"]} style={{ transform: "translateY(0px)" }}>
            A
            <div className={style["word-changing"]}>
              <i style={{ visibility: "hidden" }}>self-taught</i>
              <span>commited</span>
            </div>
            Front-end developer
          </h2>
        </div>
        <div className={style["main-scroll"]}>
          <Link to="#">
            <img src="/images/arrow.png" alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
