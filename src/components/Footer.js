import React from "react";
import logo from "../images/logo.svg";
import "./css/Footer.css";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "../components/Icons";

const Footer = () => {
  return (
    <div className="Footer">
      <img className="footer__container__logo" src={logo} alt="logo" />
      <div className="footer__container__links">
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Press Kit</a>
        <a href="#">Install Guide</a>
      </div>
      <div className="footer__container__social_media">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
