import React from "react";

import "./Steps.scss";

const Steps = ({ step }) => {
  return (
    <div className="steps">
      <div className="steps__step">
        <span className={`steps__step-count ${step === 1 ? "active" : ""}`}>
          1
        </span>
        <p className="steps__step-name">
          <span>Step 1</span>
          <span>Your Info</span>
        </p>
      </div>
      <div className="steps__step">
        <span className={`steps__step-count ${step === 2 ? "active" : ""}`}>
          2
        </span>
        <p className="steps__step-name">
          <span>Step 2</span>
          <span>Select Plan</span>
        </p>
      </div>
      <div className="steps__step">
        <span className={`steps__step-count ${step === 3 ? "active" : ""}`}>
          3
        </span>
        <p className="steps__step-name">
          <span>Step 3</span>
          <span>Add-ons</span>
        </p>
      </div>
      <div className="steps__step">
        <span className={`steps__step-count ${step === 4 ? "active" : ""}`}>
          4
        </span>
        <p className="steps__step-name">
          <span>Step 4</span>
          <span>Summary</span>
        </p>
      </div>
    </div>
  );
};

export default Steps;
