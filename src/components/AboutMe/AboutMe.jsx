import React from "react";
import { Link } from "react-router-dom";
import style from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={style["about-container"]}>
      <div className={style["about-header"]}>
        <h1 className="title">About me</h1>
        <h2 className="sub-title">
          If you're<span> wondering</span> who <span>I am...</span>
        </h2>
      </div>
      <div className={style["about-intro"]}>
        <p className={style["about-name"]}>
          I'm <span className="coustom-span"> Amresh </span> , a 23 years old <span className="coustom-span">Front-end</span> developer, from <span className={style["coustom-span"]}>India</span> .
        </p>
        <p className={style["about-degree"]}>
          A passionate aspiring <em>Front-end Developer</em> Actively ready to join in a great lively team of a good start-up to adapt me in any situation and environment with ease and perform the best.
        </p>
      </div>
      <div className={style["about-stack-section"]} style={{ padding: "10px" }}>
        <h2 className={style["about-stack-title"]}>
          My current <span className="coustom-span">stack</span> of <span className="coustom-span">languages/technologies</span> is:
        </h2>
        <p className={style["about-stack"]}>HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - REDUX - STYLED COMPONENTS - CSS MODULES - FIREBASE - BABEL</p>
        <Link to="#" className={style["resume-button"]}>
          {" "}
          Resume
        </Link>
      </div>
    </div>
  );
};
export default AboutMe;
