import React from "react";
import logo from "../images/logo.svg";
import "./css/Footer.css";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer__container"></div>
      <img className="footer__container__logo" src={logo} alt="logo" />
      <div className="footer__container__links">
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
        <a href="#">Prvacy Policy</a>
        <a href="#">Press Kit</a>
        <a href="#">Install Guide</a>
      </div>
      <div className="footer__container__social_media">
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
