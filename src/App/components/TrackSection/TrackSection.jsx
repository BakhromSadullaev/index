import React from "react";
import style from "./TrackSection.module.scss";
import rocketImg from "../../../assets/images/Dreamers rocket 3d concept-01 1.svg";
import icon1 from "../../../assets/images/track-1 1.svg";
import icon2 from "../../../assets/images/Group.svg";
import icon3 from "../../../assets/images/last.svg";

const TrackSection = () => {
  return (
    <section>
      <h3 className={style.description}>Our Courses</h3>
      <h1 className={style.title}>Explore Our Wide Range of Courses</h1>

      <main>
        <div className={style.img_container}>
          <img src={rocketImg} alt="" />
        </div>

        <div className={style.content}>
          <article>
            <div className={style.icon}>
              <img src={icon1} alt="" />
            </div>
            <h3>Track-1</h3>
            <p>HTML CSS Javascript basics</p>
            <a href="">Get Started &#8594;</a>
          </article>

          <article>
            <div className={style.icon}>
              <img src={icon2} alt="" />
            </div>
            <h3>Track-2</h3>
            <p>Javascript React library</p>
            <a href="">Get Started &#8594;</a>
          </article>

          <article>
            <div className={style.icon}>
              <img src={icon3} alt="" />
            </div>
            <h3>Track-1</h3>
            <p>Job & Interview preparation</p>
            <a href="">Get Started &#8594;</a>
          </article>

          <div className={style.more}>
            <p>Book a Free Class to Start Your Kid's Coding Journey</p>

            <button>Book a Free Trial Class &#8594;</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TrackSection;
