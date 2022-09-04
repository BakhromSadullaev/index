import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styles from "./PrevArrow.module.scss";

const PrevArrow = ({ style, onClick }) => {
  return (
    <div className={styles.prev} style={{ ...style }} onClick={onClick}>
      <NavigateBeforeIcon />
    </div>
  );
};

export default PrevArrow;
