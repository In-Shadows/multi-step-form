import React, { useContext } from "react";

import "./PlanCard.scss";
import FormContext from "../../store/form-context";

const PlanCard = (props) => {
  const ctx = useContext(FormContext);

  const planClickHandler = (e) => {
    ctx.selectPremium({ name: e.target.value, cost: e.target.id });
  };

  return (
    <div className={`form__plan-input ${ctx.monthlyPlan ? "" : "yearly"}`}>
      <label
        htmlFor={`$${props.price}/${ctx.monthlyPlan ? "mo" : "yr"}`}
        className="plan"
      >
        <div>
          <img src={props.icon} alt="icon" />
        </div>
        <div>
          <p className="form__plan-name">{props.name}</p>
          <p className="form__plan-price">{`$${
            ctx.monthlyPlan ? props.price : props.price * 10
          }/${ctx.monthlyPlan ? "mo" : "yr"}`}</p>
          <p className="yearly-text">2 months free</p>
        </div>
      </label>
      <input
        onClick={planClickHandler}
        type="radio"
        id={`$${props.price}/${ctx.monthlyPlan ? "mo" : "yr"}`}
        name="plan"
        value={props.name}
        className="plan"
        defaultChecked={props.check}
      />
    </div>
  );
};

export default PlanCard;
