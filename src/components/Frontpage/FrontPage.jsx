import React from "react";
import style from "./FrontPage.module.css";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const FrontPage = (props) => {
  return (
    <div className={style["frontpage-container"]}>
      <Navbar />
      {/* <Element className="element" id="containerElement"> */}
      <main className={style["frontpage-main"]}>
        <Header />
        {/* <Element name="firstInsideContainer"> */}
        <AboutMe title="Section 1" dark={true} id="aboutMe" />
        {/* </Element> */}
        <Portfolio />
      </main>
      {/* </Element> */}
      <Footer />
    </div>
  );
};

export default FrontPage;
