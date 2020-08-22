import React, { useEffect } from "react";
import { image_url_white, image_url } from "../Helper/image_url";
import style from "./Footer.module.css";

function Footer(props) {
  let { color, background } = props.styles;
  let { checked } = props;

  return (
    <div className={style["Footer-container"]} style={{ backgroundColor: background }}>
      <div className={style["Footer-contact"]}>
        <h1 className="title">Contact Me</h1>
        <h2 className="sub-title" style={{ color: color }}>
          If you want to <span style={{ color: color }}>talk</span>, you can <span style={{ color: color }}> find me</span> at:
        </h2>
      </div>
      <div className={style["Footer-Link"]}>
        <a href="/#" className={style["email"]} style={{ color: color }}>
          amreshk005@gmail.com
        </a>
        <div className={style["icons-section"]}>
          {checked ? (
            <a href="https://github.com/amreshk005">
              <img src="/images/github-icon.svg" alt="github logo" />
            </a>
          ) : (
            <a href="https://github.com/amreshk005">
              <img src="/images/github-icon.svg" alt="github logo" />
            </a>
          )}
          {checked ? (
            <a href="https://www.linkedin.com/in/amreshk005/">
              <img src="/images/linkedin.png" alt="github logo" />
            </a>
          ) : (
            <a href="https://www.linkedin.com/in/amreshk005/">
              <img src="/images/linkedin.png" alt="github logo" />
            </a>
          )}
          {checked ? (
            <a href="https://twitter.com/amreshk005">
              <img src="/images/twitter.png" alt="github logo" />
            </a>
          ) : (
            <a href="https://twitter.com/amreshk005">
              <img src="/images/twitter.png" alt="github logo" />
            </a>
          )}
        </div>
      </div>
      <div className={style["Footer-Logo"]}>
        {checked ? <img style={{ opacity: 1, width: "10rem" }} src={image_url} alt="logo_dark" /> : <img style={{ width: "10rem" }} src={image_url_white} alt="light_image" />}
        <p style={{ color: color }}>COPYRIGHT © 2020, AMRESH</p>
      </div>
    </div>
  );
}

export default Footer;
