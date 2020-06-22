import React from "react";
import "./css/Extract.css";

const Extract = (props) => {
  return (
    <div className="extract">
      <div className="extract__container">
        <h2 className="extract__container__title">{props.title}</h2>
        <p className="extract__container__excerpt">{props.excerpt}</p>
      </div>
    </div>
  );
};

export default Extract;
