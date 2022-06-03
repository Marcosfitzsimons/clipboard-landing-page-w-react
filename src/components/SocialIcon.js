import React from "react";
import "../css/Footer.css";

export function SocialIcon(props) {
  return (
    <li className="media-list__item">
      <img src={require(`../images/icon-${props.social}.svg`)} alt="#" />
    </li>
  );
}
