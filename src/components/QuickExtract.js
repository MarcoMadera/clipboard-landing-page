import React from "react";
import "./css/QuickExtract.css";

const QuickExtract = (props) => {
  return (
    <div className="quickExtract">
      <div className="quickExtract__container">
        <h3 className="quickExtract__container__title">{props.title}</h3>
        <p className="quickExtract__container__excerpt">{props.excerpt}</p>
      </div>
    </div>
  );
};

export default QuickExtract;
