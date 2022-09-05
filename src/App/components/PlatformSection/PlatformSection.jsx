import React from "react";
import style from "./PlatformSection.module.scss";
import img from "../../../assets/images/image.svg";
import  './Platform.js'

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
        <span className={style.number} data-value='400' >0</span>
              <p>Registrations</p>
            </article>

            <article>
              <h1>1300</h1>
              <p>Countries</p>
            </article>

            <article>
              <h1>1300</h1>
              <p>Student Retention</p>
            </article>

            <article>
              <h1>1300</h1>
              <p>Rating</p>
            </article>
          </div>
        </div>
      </div>
      <script src="Platform.js"></script>
    </div>
  );
};

export default PlatformSection;


  // <div>
  //             <span>
  //               <NumberCounter end={140} start={100} delay={5} preFix='+'/>
  //             </span>
  //             <span>EXPERT COACHES</span>
  //           </div>

  //           <div>
  //             <span>
  //                <NumberCounter end={980} start={100} delay={3} preFix='+'/>
  //             </span>
  //             <span>MEMBERS JOINED</span>
  //           </div>

  //           <div>
  //             <span>
  //                <NumberCounter end={50} start={10} delay={4} preFix='+'/>
  //             </span>
  //             <span>FITNESS PROGRAMS</span>
  //           </div>
  //         </div>