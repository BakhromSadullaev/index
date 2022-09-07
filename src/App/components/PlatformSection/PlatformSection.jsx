import React from "react";
import style from "./PlatformSection.module.scss";
import img from "../../../assets/images/image.svg";

const PlatformSection = () => {
  return (
    <div className={style.platformSection}>
      <div className={style.container}>
        <main>
          <h1>#1 Uzbekistan Coding Platform for Kids</h1>
          <img src={img} alt="" />
        </main>

        <div className={style.rightSide}>
          <article>
            <div className={style.block}></div>
            <p>Customized Learning</p>
          </article>
          <article>
            <div className={style.block}></div>
            <p>Award Winning Curriculum</p>
          </article>
          <article>
            <div className={style.block}></div>
            <p>100% Satisfaction Guaranteed</p>
          </article>

          <div className={style.infoBlock}>
            <article>
              <h1>1300</h1>
              <p>Registrations</p>
            </article>

            <article>
              <h1>11</h1>
              <p>Countries</p>
            </article>

            <article>
              <h1>91%</h1>
              <p>Student Retention</p>
            </article>

            <article>
              <h1>5*</h1>
              <p>Rating</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;
