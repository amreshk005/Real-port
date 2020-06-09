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
          {/* After my college degree in <em> "Communication & Multimedia"</em> , I got a job as a "developer", where I stayed for almost 2 years, but I only developed websites with Wordpress custom themes, and HTML & CSS… So I wasn’t learning
          and improving, I felt stuck. */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga asperiores sint eos ut ipsam accusamus, minus, illum doloremque delectus eius facilis suscipit odio nesciunt quia veritatis impedit ea placeat nihil!
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
