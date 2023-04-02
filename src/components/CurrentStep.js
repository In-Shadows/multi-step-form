import React, { useState, useContext, useRef } from "react";

import "./CurrentStep.scss";
import StepDetails from "./StepDetails/StepDetails";
import PersonalForm from "./Personal/PersonalForm";
import PlanForm from "./Plan/PlanForm";
import AddOnsForm from "./AddOns/AddOnsForm";
import Finish from "./Finish/Finish";
import FormContext from "../store/form-context";
import Icon from "../assets/images/icon-thank-you.svg";

const CurrentStep = ({ step, nextStep, prevStep }) => {
  const personalRef = useRef();

  const nextClickHandler = () => {
    if (step === 1) {
      if (personalRef.current.checkError()) {
        return;
      }
      nextStep();
      return;
    }
    nextStep();
  };

  const goBackClickHandler = () => {
    prevStep();
  };

  if (step === 5) {
    return (
      <div className="success">
        <div className="success__icon">
          <img src={Icon} alt="success" />
        </div>
        <h3 className="success__heading">Thank you!</h3>
        <p className="success__text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    );
  }

  return (
    <div className="current-step">
      <div>
        <div className="current-step__mobile">
          <StepDetails step={step} />
          <div>
            <form className="form">
              <PersonalForm
                ref={personalRef}
                classes={`slide-1 ${step === 1 ? "slide-active" : ""}`}
              />
              <PlanForm
                classes={`slide-2 ${step === 2 ? "slide-active" : ""}`}
              />
              <AddOnsForm
                classes={`slide-3 ${step === 3 ? "slide-active" : ""}`}
              />
              <Finish
                classes={`slide-4 ${step === 4 ? "slide-active" : ""}`}
                setStep={prevStep}
              />
            </form>
          </div>
        </div>
        <div className="current-step__btns">
          {!(step === 1) && (
            <button
              className="current-step__btn current-step__btn--1"
              onClick={goBackClickHandler}
            >
              Go Back
            </button>
          )}

          <button
            className={`current-step__btn current-step__btn--${
              step === 4 ? "3" : "2"
            }`}
            onClick={nextClickHandler}
          >
            {step >= 1 && step <= 3 ? "Next Step" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentStep;
