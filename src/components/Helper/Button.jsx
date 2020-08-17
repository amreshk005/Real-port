import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <a href={props.Link} className={style["button-link"]} style={{ backgroundColor: `${props.background}`, color: `${props.color}`, border: `${props.border}` }}>
      {props.data}
    </a>
  );
};

export default Button;
