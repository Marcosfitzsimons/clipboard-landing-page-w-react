import React from "react";
import "../css/Feature.css";

export function Feature(props) {
  return (
    <article className="feature center-text">
      <div className="icon-container">
        <img
          src={require(`../images/icon-${props.icon}.svg`)}
          alt="#"
          className="feature__icon"
        />
      </div>
      <h3 className="feature__title">{props.title}</h3>
      <p className="feature__text">{props.text}</p>
    </article>
  );
}
