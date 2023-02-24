import React from "react";
import "./LikCard.scss";
const LikCard = ({ children, text, path }) => {
  return (
    <>
      <div className="likCard">
        <div className="likCard-wraper">{children}</div>
      </div>
    </>
  );
};

export default LikCard;
