import React from "react";
import style from "./FrontPage.module.css";
import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const FrontPage = (props) => {
  return (
    <div className={style["frontpage-container"]}>
      <Navbar />
      <main className={style["frontpage-main"]}>
        <Header />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default FrontPage;
