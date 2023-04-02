import React, { useContext } from "react";

import "./PlanForm.scss";
import PlanCard from "./PlanCard";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import FormContext from "../../store/form-context";

const plans = [
  { name: "Arcade", price: 9, icon: iconArcade },
  {
    name: "Advanced",
    price: 12,
    icon: iconAdvanced,
  },
  { name: "Pro", price: 15, icon: iconPro },
];

const PlanForm = ({ classes }) => {
  const ctx = useContext(FormContext);

  return (
    <div className={classes}>
      <fieldset className={`form__plan`}>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            name={plan.name}
            price={plan.price}
            icon={plan.icon}
            check={index === 0 ? true : false}
          />
        ))}
      </fieldset>

      <div className="form__plan-switcher">
        <span className={ctx.monthlyPlan ? "switchActiveText" : ""}>
          Monthly
        </span>
        <span className="form__plan-switcher-btn" onClick={ctx.switchPlan}>
          <span className={!ctx.monthlyPlan ? "switchActiveBtn" : ""}></span>
        </span>
        <span className={!ctx.monthlyPlan ? "switchActiveText" : ""}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default PlanForm;
