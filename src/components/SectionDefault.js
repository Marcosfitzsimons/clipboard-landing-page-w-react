import React from "react";
import "../css/SectionDefault.css";

export function SectionDefault(props) {
  return (
    <section className="section-default center-text container section-default-grid">
      <h2 className="section-default__title">{props.title}</h2>
      <p className="section-default__text">{props.text}</p>
    </section>
  );
}
