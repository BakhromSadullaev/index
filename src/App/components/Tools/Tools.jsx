import React from "react";
import style from "./Tools.module.scss";
import toolsImg from "../../../assets/images/Softwares.png";

function Tools() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>Tools We Use For The Best Learning Experience</h1>
        <img src={toolsImg} alt="tools" className={style.toolsImg} />
      </div>
    </div>
  );
}

export default Tools;
