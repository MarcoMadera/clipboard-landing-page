import React from "react";
import "./css/Buttons.css";

const Buttons = () => {
  return (
    <div className="Buttons">
      <div className="Buttons__container">
        <a href="#" className="Buttons__container__iOSButton">
          <p className="b">Download for iOS</p>
        </a>
        <a href="#" className="Buttons__container__MacButton">
          <p className="b">Download for Mac</p>
        </a>
      </div>
    </div>
  );
};

export default Buttons;
