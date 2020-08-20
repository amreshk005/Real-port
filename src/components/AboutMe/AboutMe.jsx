import React from "react";
import style from "./AboutMe.module.css";

const AboutMe = (props) => {
  let { color } = props;
  let pdfLink = "https://firebasestorage.googleapis.com/v0/b/mybuk960.appspot.com/o/pdf%2FAmresh's%20Resume.pdf?alt=media&token=813b9069-d665-4828-8784-8a51fd289f65";
  return (
    <div className={style["about-container"]}>
      <div className={style["about-header"]}>
        <h1 className="title">About me</h1>
        <h2 className="sub-title" style={{ color: `${color}` }}>
          If you're<span style={{ color: `${color}` }}> wondering</span> who <span style={{ color: `${color}` }}>I am...</span>
        </h2>
      </div>
      <div className={style["about-intro"]} style={{ color: `${color}` }}>
        <p className={style["about-name"]}>
          I'm <span className="coustom-span"> Amresh </span> , a 21 years old <span className="coustom-span">Front-end</span> developer, from <span className={style["coustom-span"]}>India</span> .
        </p>
        <p className={style["about-degree"]}>
          A passionate aspiring <em style={{ color: `${color}` }}>Front-end Developer</em> Actively ready to join in a great lively team of a good start-up to adapt me in any situation and environment with ease and perform the best.
        </p>
      </div>
      <div className={style["about-stack-section"]} style={{ padding: "10px" }}>
        <h2 className={style["about-stack-title"]} style={{ color: `${color}` }}>
          My current <span className="coustom-span">stack</span> of <span className="coustom-span">languages/technologies</span> is:
        </h2>
        <p className={style["about-stack"]}>HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - REDUX - STYLED COMPONENTS - CSS MODULES - FIREBASE - BABEL</p>
        <a href={pdfLink} className={style["resume-button"]}>
          {" "}
          Resume
        </a>
      </div>
    </div>
  );
};
export default AboutMe;
