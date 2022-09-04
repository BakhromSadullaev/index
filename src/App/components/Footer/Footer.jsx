import React from 'react'
import style from './Footer.module.scss'
import index from '../../../assets/images/INDEX-removebg-preview.png'

function Footer() {
  return (
    <div className={style.wrapper} >
        <div className={style.container} >
            <h1>
                Help Your Kid Become the Next Tech Superstar. Start now.
            </h1>
            <div className={style.footerContent} >
                <div className={style.footerIndex} >
                    <h2>INDEX</h2>
                    <p>An EdTech startup that blends technology with education in order to nurture the next generation of leaders with problem solving skills, creativity, logical thinking and mathematical and analytical abilities.</p>
                </div>

                <ul className={style.ul1} >
                    <h3>Company</h3>
                    <li>About us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>

                 <ul className={style.ul2} >
                    <h3>Company</h3>
                    <li>About us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>

                <div className={style.contact} >
                    <h3>Contact Details</h3>
                    <div className={style.location} >
                        <i class="fa-solid fa-location-dot"></i>
                        <p> Uzbekistan, Bukhara, Ibrokhim Muminov St  </p>
                     </div>
                        <div className={style.phone} >
                            <i class="fa-solid fa-phone"></i>
                            <p>+998 (95) 220 0550 </p>
                        </div>

                        <div className={style.message} >
                            <i class="fa-solid fa-envelope"></i>
                            <p>indexacademy.uz</p>
                        </div>
                </div>
            </div>
        </div>
        
            <div className={style.footerLine} ></div>
        <footer>
            <div className={style.footerWrapper} >
                <p>© 2022 INDEX Academy</p>
                <div className={style.iconWrapper} >
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer