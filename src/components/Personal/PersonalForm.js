import React, { useImperativeHandle, useRef } from "react";
import { useState } from "react";

import "./PersonalForm.scss";
import FormContext from "../../store/form-context";

const PersonalForm = React.forwardRef((props, ref) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const [error, setError] = useState();
  const errorText = "This field is required";
  let invalid;

  // a function to check if the input contains only numbers
  const onlyNumbers = (str) => {
    return /^[0-9]*$/.test(str);
  };

  // a function to validate input email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkError = () => {
    const inputName = nameInputRef.current.value;
    const inputEmail = emailInputRef.current.value;
    const inputPhoneNumber = phoneNumberInputRef.current.value;
    invalid = "";

    if (!inputName || inputName?.trim().length === 0) {
      invalid = "name_error";
    } else if (!inputEmail || inputEmail.trim().length === 0) {
      invalid = "email_error";
    } else if (!validateEmail(inputEmail)) {
      invalid = "invalid_email_error";
    } else if (!inputPhoneNumber || inputPhoneNumber?.trim().length === 0) {
      invalid = "number_error";
    } else if (
      (inputPhoneNumber?.length > 0 && inputPhoneNumber?.length < 7) ||
      !onlyNumbers(inputPhoneNumber)
    ) {
      invalid = "invalid_number_error";
    }
    setError(invalid);
    return invalid;
  };

  useImperativeHandle(ref, () => {
    return {
      checkError,
    };
  });

  return (
    <fieldset className={`form__personal ${props.classes}`}>
      <div className="form__personal-input">
        <label htmlFor="name" className="personal">
          Name
          {error === "name_error" && (
            <span className="error-text">{errorText}</span>
          )}
        </label>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          className={`personal ${error === "name_error" ? "error" : ""}`}
        />
      </div>
      <div className="form__personal-input">
        <label htmlFor="email" className="personal">
          Email Address
          {error === "invalid_email_error" && (
            <span className="error-text">Invalid email</span>
          )}
          {error === "email_error" &&
            emailInputRef.current.value.length === 0 && (
              <span className="error-text">{errorText}</span>
            )}
        </label>
        <input
          ref={emailInputRef}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          className={`personal ${error === "email_error" ? "error" : ""}`}
        />
      </div>
      <div className="form__personal-input">
        <label htmlFor="number" className="personal">
          Phone Number
          {error === "number_error" &&
            phoneNumberInputRef.current.value.length === 0 && (
              <span className="error-text">{errorText}</span>
            )}
          {error === "invalid_number_error" && (
            <span className="error-text">Invalid Phone Number</span>
          )}
        </label>
        <input
          ref={phoneNumberInputRef}
          type="text"
          minLength="7"
          maxLength="15"
          id="number"
          placeholder="e.g. +1 234 567 890"
          className={`personal ${
            error === "number_error" || error === "invalid_number_error"
              ? "error"
              : ""
          }`}
        />
      </div>
    </fieldset>
  );
});

export default PersonalForm;
