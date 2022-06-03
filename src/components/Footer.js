import React from "react";
import "../css/Footer.css";
import logo from "../logo.svg";
import { SocialIcon } from "../components/SocialIcon";

export function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="logo-container-footer">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="links-container">
          <ul className="links-list">
            <li className="links-list__item">FAQs</li>
            <li className="links-list__item">Contac Us</li>
            <li className="links-list__item">Privacity Policy</li>
            <li className="links-list__item">Press Kit</li>
            <li className="links-list__item">Install Guide</li>
          </ul>
        </div>
        <div className="media">
          <ul className="media-list">
            <SocialIcon social="facebook" />
            <SocialIcon social="twitter" />
            <SocialIcon social="instagram" />
          </ul>
        </div>
      </div>
    </footer>
  );
}
