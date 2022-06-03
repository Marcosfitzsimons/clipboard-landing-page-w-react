import React from "react";
import logo from "../logo.svg";
import "../css/Header.css";
import { Buttons } from "../components/Buttons";

export function Header(props) {
  return (
    <header className="header center-text">
      <div className="logo-container">
        <div className="bg-header"></div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="header-info container">
        <h1 className="header__title">A history of everything you copy</h1>
        <p className="header__text">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <Buttons />
    </header>
  );
}
