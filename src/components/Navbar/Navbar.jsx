import React from "react";
import style from "./Navbar.module.css";
import { image_url, image_url_white } from "../Helper/image_url";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Switch } from "antd/es";

const Navbar = (props) => {
  const { color, background } = props.styles;
  const { checkHandler, checked } = props;
  function getScroll(getTop) {
    window.scrollTo({ left: 0, top: getTop, behavior: "smooth" });
  }
  function scrollHandler(e) {
    let type = e.target.getAttribute("name");
    switch (type) {
      case "about":
        getScroll(700);
        break;
      case "portfolio":
        getScroll(1350);
        break;
      case "contact":
        getScroll(4000);
        break;
      default:
        break;
    }
  }
  return (
    <header className={style["frontpage-navbar"]} style={{ backgroundColor: `${background}` }}>
      <div className={style["frontpage-element"]}>
        <div className={style["frontpage-wrapped"]}>
          <div className={style["frontpage-logo"]}>
            <Link to="/">{checked ? <img style={{ opacity: 1, height: "90%" }} src={image_url} alt="logo" /> : <img style={{ height: "90%" }} src={image_url_white} alt="light_image" />}</Link>
          </div>
          <div className={style["frontpage-menu"]}>
            <ul>
              {["About me", "Portfolio", "Contact"].map((e) => (
                <li key={e + Date.now()} name="about" style={{ color: `${color}` }} onClick={scrollHandler}>
                  {e}
                </li>
              ))}
              <li>
                <Switch className={style["ant-toggle"]} checked={checked} onChange={checkHandler} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
