import React from "react";
import "./css/Contents.css";
import Buttons from "./Buttons";
import Extract from "./Extract";
import QuickExtract from "./QuickExtract";
import computer from "../images/image-computer.png";
import devices from "../images/image-devices.png";
import blacklist from "../images/icon-blacklist.svg";
import text from "../images/icon-text.svg";
import preview from "../images/icon-preview.svg";
import google from "../images/logo-google.png";
import ibm from "../images/logo-ibm.png";
import microsoft from "../images/logo-microsoft.png";
import hp from "../images/logo-hp.png";
import vector from "../images/logo-vector-graphics.png";

const Contents = () => {
  return (
    <div className="container">
      <Buttons />
      <Extract
        title="Keep track of your snippets"
        excerpt="Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything."
      />
      <img className="contents__img" src={computer} alt="" />
      <div className="contents__qExtracts">
        <QuickExtract
          title="Quick Search"
          excerpt="Easily search your snippets by content, category, web address, application, and more."
        />
        <QuickExtract
          title="iCloud Sync"
          excerpt="Instantly saves and syncs snippets across all your devices."
        />
        <QuickExtract
          title="Complete History"
          excerpt="Retrieve any snippets from the first moment you started using the app."
        />
      </div>
      <Extract
        title="Access Clipboard Anywhere"
        excerpt="Whether your're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
      />
      <img className="contents__img devices" src={devices} alt="" />
      <Extract
        title="Supercharge your workflow"
        excerpt="We've got the tools to boost your productivity."
      />
      <img className="contents__icons" src={blacklist} alt="" />
      <QuickExtract
        title="Create blacklists"
        excerpt="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
      />
      <img className="contents__icons" src={text} alt="" />
      <QuickExtract
        title="Plain text snippets"
        excerpt="Remove unwanted formatting from copied text for a consistent look."
      />
      <img className="contents__icons" src={preview} alt="" />
      <QuickExtract
        title="Sneak preview"
        excerpt="Quick preview of all snippets on your Clipboard for easy access."
      />
      <div className="contents__logos">
        <img src={google} alt="" />
        <img src={ibm} alt="" />
        <img src={microsoft} alt="" />
        <img src={hp} alt="" />
        <img src={vector} alt="" />
      </div>
      <Extract
        title="Clipboard for iOS and Mac OS"
        excerpt="Available for free on the App Store. Download for Mac of iOS, sync with iCloud and you're ready to start adding to your clipboard."
      />
      <Buttons />
    </div>
  );
};

export default Contents;
