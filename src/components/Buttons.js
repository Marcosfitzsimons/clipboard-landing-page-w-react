import React from "react";
import "../css/Buttons.css";

export function Buttons(props) {
  return (
    <section className="buttons-container container">
      <input type="button" value="Download for iOS" className="btn btn--ios" />
      <input type="button" value="Download for Mac" className="btn btn--mac" />
    </section>
  );
}
