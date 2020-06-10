import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style["Footer-container"]}>
      <div className={style["Footer-contact"]}>
        <h1 className="title">Contact Me</h1>
        <h2 className="sub-title">
          If you want to <span>talk</span>, you can <span> find me</span> at:
        </h2>
      </div>
      <div className={style["Footer-Link"]}>
        <a href="/#" className={style["email"]}>
          amreshk005@gmail.com
        </a>
        <div className={style["icons-section"]}>
          <a href="https://github.com/amreshk005">
            <img src="/images/github-icon.svg" alt="github logo" />
          </a>
          <a href="www.linkedin.com/in/amreshk005">
            <img src="/images/linkedin.png" alt="github logo" />
          </a>
          <a href="https://twitter.com/amreshk005">
            <img src="/images/twitter.png" alt="github logo" />
          </a>
        </div>
      </div>
      <div className={style["Footer-Logo"]}>
        <img src="/images/amresh-logo.jpeg" alt="footer logo" />
        <p>COPYRIGHT © 2020, AMRESH</p>
      </div>
    </div>
  );
};

export default Footer;
