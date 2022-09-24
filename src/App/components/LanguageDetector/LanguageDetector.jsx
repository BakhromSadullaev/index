import React, { useState } from "react";
import style from "./LanguageDetector.module.scss";

const LanguageDetector = () => {
  const [lang, setLang] = useState("En");
  const [contextRu, setContextRu] = useState("Ru");

  const handleRu = (e) => {
    console.log(e.target.textContent);
    setContextRu(lang);
    setLang(e.target.textContent);
  };

  return (
    <div className={style.container}>
      <h1 onClick={handleRu} className={style.lang}>
        {lang}
      </h1>
      <h1 onClick={handleRu} className={style.lang}>
        {contextRu}
      </h1>
      <h1 onClick={handleRu} className={style.lang}>
        {contextRu}
      </h1>
    </div>
  );
};

export default LanguageDetector;
