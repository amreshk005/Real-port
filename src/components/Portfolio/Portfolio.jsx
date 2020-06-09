import React from "react";
import style from "./Portfolio.module.css";
// import { Link } from "react-router-dom";
import Button from "../Helper/Button";
import data from "../../data/data.json";

const Portfolio = () => {
  return (
    <div className={style["portfolio-container"]}>
      <div className={style["portfolio-header"]}>
        <h1 className="title">Portfolio</h1>
        <h2 className="sub-title">
          Check <span>what</span> I've been doing <span>lately</span>
        </h2>
      </div>
      <div className={style["portfolio-column"]}>
        {data.map((e, index) => {
          // let
          let selector = (index + 1) % 2;

          return (
            <div key={index + Date.now()} className={style["portfolio-project-section"]} style={{ marginTop: "2rem" }}>
              <h1 className="coustom-span" style={{ marginTop: "4rem", fontSize: "1.3rem" }}>
                Amresh Portfolio
              </h1>
              {/* <div className={style[`${cardClass}`]}> */}

              <div className={style["portfolio-project"]} style={selector === 0 ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
                <div className={style["project-image"]}>
                  <img src="/images/shop-web.jpg" alt="project-img" />
                </div>
                <div className={style["project-info-section"]}>
                  <p className={style["project-info"]}>
                    This very website you're now watching. I wanted something fast and with good SEO for my portfolio, so a static website generator like Gatsby seemed like the best fit. It reads data from markdown files, so it's super easy
                    for me to keep adding Portfolio items as I keep developing stuff. It also has a cool dark mode switch since I couldn't decide between a dark or light design.
                  </p>
                  <p className={style["project-tech"]}>REACT - STYLED COMPONENTS - GATSBY</p>
                  <div className={style["project-button-section"]}>
                    <Button background="#089eca" color="#fff" border="1px solid transparent" data="visit" />
                    <Button background="transparent" color="#333" border="1px solid #333" data="source" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
