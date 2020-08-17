import React from "react";
import style from "./Portfolio.module.css";
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
                {e.name}
              </h1>
              {/* <div className={style[`${cardClass}`]}> */}

              <div className={style["portfolio-project"]} style={selector === 0 ? { flexDirection: "row-reverse" } : { flexDirection: "row" }}>
                <div className={style["project-image"]}>
                  <img src={e.image} alt="project-img" />
                </div>
                <div className={style["project-info-section"]}>
                  <p className={style["project-info"]}>{e.des}</p>
                  <p className={style["project-tech"]}>{e.Tech}</p>
                  <div className={style["project-button-section"]}>
                    {/* <Link to={{ pathname: e.Link }}> */}
                    <Button Link={e.Link} background="#089eca" color="#fff" border="1px solid transparent" data="visit" />
                    {/* </Link> */}
                    {/* <Link> */}
                    <Button Link={e.GithubLink} background="transparent" color="#333" border="1px solid #333" data="source" />
                    {/* </Link> */}
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
