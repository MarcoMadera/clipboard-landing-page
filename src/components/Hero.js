import React, { Fragment } from "react";
import "./css/Hero.css";
import logo from "../images/logo.svg";

const Hero = () => {
  return (
    <Fragment>
      <div className="Hero">
        <div className="Hero__container__logo">
          <img src={logo} alt="" />
        </div>
        <div className="Hero__container__title">
          <h1>A history of everything you copy</h1>
        </div>
      </div>
      <div className="Hero__container">
        <div className="Hero__container__excerpt">
          <p>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
