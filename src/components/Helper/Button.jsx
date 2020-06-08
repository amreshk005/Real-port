import React from "react";
import style from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to="#" className={style["button-link"]} style={{ backgroundColor: `${props.background}`, color: `${props.color}`, border: `${props.border}` }}>
      {props.data}
    </Link>
  );
};

export default Button;
