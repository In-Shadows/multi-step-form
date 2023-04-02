import React from "react";

import "./StepDetails.scss";

const StepDetails = ({ step }) => {
  let heading, text;

  if (step === 1) {
    heading = "Personal info";
    text = "Please provide your name, email address and phone number.";
  }
  if (step === 2) {
    heading = "Select your plan";
    text = "You have the option of monthly or yearly billing.";
  }
  if (step === 3) {
    heading = " Pick add-ons";
    text = "Add-ons help enhance your gaming experience.";
  }
  if (step === 4) {
    heading = "Finishing up";
    text = "Double-check everything looks OK before confirming.";
  }

  return (
    <div className="step">
      <h3 className="step-heading">{heading}</h3>
      <p className="step-text">{text} </p>
    </div>
  );
};

export default StepDetails;
