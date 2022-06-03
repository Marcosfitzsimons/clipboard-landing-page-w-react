import React from "react";
import "../css/Main.css";
import { SectionDefault } from "./SectionDefault";
import { ComputerInfo } from "./ComputerInfo";
import { Feature } from "./Feature";
import computerImg from "../images/image-computer.png";
import devicesImg from "../images/image-devices.png";

export function Main(props) {
  return (
    <main className="main container">
      <section className="computer-section">
        <div className="computer-img-container">
          <img src={computerImg} alt="computer" className="computer-img" />
        </div>
        <div className="computer-info-container">
          <ComputerInfo
            title="Quick Search"
            text="Easily search your snippets by content, category, web address, application, and more."
          />
          <ComputerInfo
            title="iCloud Sync"
            text="Instantly saves and syncs snippets across all your devices"
          />
          <ComputerInfo
            title="Complete History"
            text="Retrieve any snippets from the first moment you started using the app"
          />
        </div>
      </section>
      <section className="devices-section">
        <SectionDefault
          title="Acces Clipboard anywhere"
          text="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
        />
        <div className="devices-img center-text">
          <img src={devicesImg} alt="devices" className="devices-img" />
        </div>
      </section>
      <section className="features">
        <div className="features__header">
          <SectionDefault
            title="Superchange your workflow"
            text="We've got the tools to boost your productivity."
          />
        </div>
        <div className="feature-container feature-container--blacklist">
          <Feature
            icon="blacklist"
            title="Create blacklist"
            text="Ensure sensitive information never makes its way to your clipboard by excluding certaing sources."
          />
        </div>
        <div className="feature-container feature-container--text">
          <Feature
            icon="text"
            title="Plain text snippets"
            text="Remove unwanted formatting from copied text for a consistent look."
          />
        </div>
        <div className="feature-container feature-container--preview">
          <Feature
            icon="preview"
            title="Sneak preview"
            text="Quick preview of all snippets on your Clipboard for asy access."
          />
        </div>
      </section>
    </main>
  );
}
