import React, { useContext } from "react";

import checkmark from "../../assets/images/icon-checkmark.svg";
import "./Checkbox.scss";
import FormContext from "../../store/form-context";

const Checkbox = ({ name, description, price }) => {
  const ctx = useContext(FormContext);

  const serviceClickHandler = (e) => {
    if (e.target.checked) {
      ctx.addService(e.target.id);
    } else {
      ctx.removeService(e.target.id);
    }
  };

  return (
    <div className="form__addons-input">
      <label
        className="addons"
        htmlFor={`${name.at(0)}$${price}/${ctx.monthlyPlan ? "mo" : "yr"}`}
      >
        <div className="form__addons-img">
          <img src={checkmark} alt="check" />
        </div>
        <div>
          <p className="form__addon-name">{name}</p>
          <p className="form__addon-description">{description}</p>
        </div>
        <div className="form__addon-price">{`+$${
          ctx.monthlyPlan ? price : price * 10
        }/${ctx.monthlyPlan ? "mo" : "yr"}`}</div>
      </label>
      <input
        onClick={serviceClickHandler}
        type="checkbox"
        className="addons"
        id={`${name.at(0)}$${price}/${ctx.monthlyPlan ? "mo" : "yr"}`}
      />
    </div>
  );
};

export default Checkbox;
