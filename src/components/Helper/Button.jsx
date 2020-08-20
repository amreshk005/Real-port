import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  let marginLeft = props.marginLeft ? props.marginLeft : "0px";
  return (
    <a href={props.Link} className={style["button-link"]} style={{ backgroundColor: `${props.background}`, color: `${props.color}`, border: `${props.border}`, marginLeft: `${marginLeft}` }}>
      {props.data}
    </a>
  );
};

export default Button;
