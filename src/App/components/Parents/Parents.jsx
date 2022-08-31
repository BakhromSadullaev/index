import React from 'react'
import style from './Parents.module.scss'
import stars from '../../../assets/images/star.png'
import mather from '../../../assets/images/Ellipse 54.png'
import father from '../../../assets/images/image.png'
import mather2 from '../../../assets/images/Ellipse 55.png'




function Parents() {
  return (
    <div className={style.wrapper} >
      <div className={style.container} >
        <div className={style.aboutUs} >
          <h3>Testimonial</h3>
          <p>What Parents are
             Saying About Us</p>
        </div>

          <div className={style.articleContainer} >
            <article>
              <img src={mather} alt="" />
              <p>There are many variations passages of Lorem lpsum available, but the majority have suffered alteration in some form, by injected or randomised.</p>
              <hr />
              <div className={style.starsWrapper} >
              <div className={style.nameWrapper} >
                <h4>Sharmin Akter</h4>
                <p>Mother of Mohammad Mahdi</p>
              </div>
              <img src={stars} alt="" />
              </div>
            </article>

              <article>
              <img src={father} alt="" />
              <p>There are many variations passages of Lorem lpsum available, but the majority have suffered alteration in some form, by injected or randomised.</p>
              <hr />
              <div className={style.starsWrapper} >
              <div className={style.nameWrapper} >
                <h4>Sunny Ismail</h4>
                <p>Father of Ayesha Khalil</p>
              </div>
              <img src={stars} alt="" />
              </div>
            </article>

              <article>
              <img src={mather2} alt="" />
              <p>There are many variations passages of Lorem lpsum available, but the majority have suffered alteration in some form, by injected or randomised.</p>
              <hr />
              <div className={style.starsWrapper} >
              <div className={style.nameWrapper} >
                <h4>Amreen Haq</h4>
                <p>Mother of Affan Mohammad</p>
              </div>
              <img src={stars} alt="" />
              </div>
            </article>
          </div>
      </div>
    </div>
  )
}

export default Parents