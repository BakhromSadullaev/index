import React, { useState } from "react";
import style from "./LanguageDetector.module.scss";

const LanguageDetector = () => {
  const [lang, setLang] = useState("En");
  const [contextRu, setContextRu] = useState("Ru");

  const handleRu = () => {
    if (lang === "En") {
      setContextRu("En");
    } else if (lang === "Uz") {
      setContextRu("Uz");
    }
    if (lang !== "Ru") setLang("Ru");
  };

  return (
    <div className={style.container}>
      <h1 onClick={() => setLang(lang)} className={style.lang}>
        {lang}
      </h1>
      <h1 onClick={handleRu} className={style.lang}>
        {contextRu}
      </h1>
      <h1
        onClick={() => setLang(lang !== "Uz" ? "Uz" : "Ru")}
        className={style.lang}
      >
        {lang !== "Uz" ? "Uz" : "Ru"}
      </h1>
    </div>
  );
};

export default LanguageDetector;
