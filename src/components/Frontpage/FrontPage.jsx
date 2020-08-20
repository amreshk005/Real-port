import React, { useState, useEffect } from "react";
import style from "./FrontPage.module.css";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const FrontPage = (props) => {
  const [checked, setState] = useState(false);
  const [styles, setStyles] = useState({ background: "", color: "" });
  let { background, color } = styles;

  useEffect(() => {
    !checked
      ? setStyles({
          ...styles,
          background: "#212121",
          color: "#dadada",
        })
      : setStyles({
          ...styles,
          background: "#fff",
          color: "#575757",
        });
  }, [checked]);

  function checkHandler(e) {
    setState(!checked);
  }

  return (
    <div className={style["frontpage-container"]}>
      <Navbar checkHandler={checkHandler} checked={checked} styles={styles} />
      <main className={style["frontpage-main"]} style={{ backgroundColor: `${background}` }}>
        <Header checked={checked} color={color} />
        <AboutMe title="Section 1" dark={true} id="aboutMe" color={color} />
        <Portfolio checked={checked} color={color} />
      </main>
      <Footer styles={styles} checked={checked} />
    </div>
  );
};

export default FrontPage;
