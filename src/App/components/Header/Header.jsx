import React from "react";
import style from "./Header.module.scss";
import editorImg from "../../../assets/images/editor.svg";

const Header = () => {
  return (
    <header>
      <main className={style.container}>
        <div className={style.content}>
          <h1>Coding Classes For Kids and Future Developers in Uzbekistan</h1>
          <p>
            We are open community and educational academy to produce highly
            qualified software engineers
          </p>

          <div className={style.btn_container}>
            <button>Watch Video</button>
            <button>Book a Free Trial Class</button>
          </div>
        </div>

        <div className={style.img_container}>
          <img src={editorImg} alt="" />
        </div>
      </main>
    </header>
  );
};

export default Header;
