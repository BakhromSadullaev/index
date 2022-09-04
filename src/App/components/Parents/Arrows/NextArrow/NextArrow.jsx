import React from "react";
import styles from "./nextArrow.module.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NextArrow = (props) => {
  const { className, style, onClick, icon } = props;
  return (
    <div className={styles.next} style={{ ...style }} onClick={onClick}>
      <NavigateNextIcon />
    </div>
  );
};

export default NextArrow;
