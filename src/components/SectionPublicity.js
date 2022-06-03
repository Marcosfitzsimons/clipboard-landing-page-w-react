import React from "react";
import "../css/SectionPublicity.css";
import { Buttons } from "./Buttons";
import { PublicityImg } from "./PublicityImg";
import { SectionDefault } from "./SectionDefault";

export function SectionPublicity(props) {
  return (
    <section className="publicity-section">
      <div className="publicity-container container">
        <PublicityImg company="google" />
        <PublicityImg company="ibm" />
        <PublicityImg company="microsoft" />
        <PublicityImg company="hp" />
        <PublicityImg company="vector-graphics" />
      </div>
      <SectionDefault
        title="Clipboard for iOS and Mac OS"
        text="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
      />
      <Buttons />
    </section>
  );
}
