import React from "react";

export function PublicityImg(props) {
  return (
    <div className="publicity-img-container">
      <img src={require(`../images/logo-${props.company}.png`)} alt="google" />
    </div>
  );
}
