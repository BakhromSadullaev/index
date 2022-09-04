import React from "react";
import Slider from "react-slick";
import styles from "./Parents.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./Arrows/NextArrow/NextArrow";

import star from "../../../assets/images/star.png";
import PrevArrow from "./Arrows/PrevArrow/PrevArrow";

const Parents = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <p className={styles.small}>Testimonial</p>
      <h1 className={styles.title}>What Parents are Saying About Us</h1>

      <div className={styles.testimonial}>
        <Slider {...settings}>
          <div>
            <article className={styles.parent}>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className={styles.img}
              />
              <p className={styles.comment}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos vero voluptas explicabo tempora dolor consequuntur
                optio id vel iusto modi dolorem laboriosam earum hic corrupti
                tempore harum, omnis eos illo!
              </p>
              <div className={styles.line}></div>
              <div className={styles.parentInfo}>
                <div className={styles.parentName}>
                  <h3 className={styles.name}>Sharmin Akter</h3>
                  <p className={styles.who}> Mather of Mohammad Mahdi</p>
                </div>
                <img src={star} alt="" />
              </div>
            </article>
          </div>

          <div>
            <article className={styles.parent}>
              <img
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className={styles.img}
              />
              <p className={styles.comment}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos vero voluptas explicabo tempora dolor consequuntur
                optio id vel iusto modi dolorem laboriosam earum hic corrupti
                tempore harum, omnis eos illo!
              </p>
              <div className={styles.line}></div>
              <div className={styles.parentInfo}>
                <div className={styles.parentName}>
                  <h3 className={styles.name}>Sharmin Akter</h3>
                  <p className={styles.who}> Mather of Mohammad Mahdi</p>
                </div>
                <img src={star} alt="" />
              </div>
            </article>
          </div>

          <div>
            <article className={styles.parent}>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className={styles.img}
              />
              <p className={styles.comment}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos vero voluptas explicabo tempora dolor consequuntur
                optio id vel iusto modi dolorem laboriosam earum hic corrupti
                tempore harum, omnis eos illo!
              </p>
              <div className={styles.line}></div>
              <div className={styles.parentInfo}>
                <div className={styles.parentName}>
                  <h3 className={styles.name}>Sharmin Akter</h3>
                  <p className={styles.who}> Mather of Mohammad Mahdi</p>
                </div>
                <img src={star} alt="" />
              </div>
            </article>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Parents;
