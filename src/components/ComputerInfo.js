import React from "react";
import "../css/ComputerInfo.css";

export function ComputerInfo(props) {
  return (
    <article className="computer-info-article center-text">
      <h3 className="computer-info-article__title">{props.title}</h3>
      <p className="computer-info-article__text">{props.text}</p>
    </article>
  );
}
