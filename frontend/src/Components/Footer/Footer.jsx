import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import whatsapp_icons from "../Assets/whatsapp_icon.png";
import pintesters from "../Assets/pintester_icon.png";
import instagram_icons from "../Assets/instagram_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icons">
        <div className="footer-icon-container">
          <img src={instagram_icons} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintesters} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icons} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};
