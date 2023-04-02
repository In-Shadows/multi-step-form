import React, { useContext } from "react";

import "./Finish.scss";
import FormContext from "../../store/form-context";

const Finish = ({ classes, setStep }) => {
  const ctx = useContext(FormContext);

  const changeClickHandler = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const calculateTotal = () => {
    const premium = ctx.premium.cost;
    const services = ctx.services.reduce((acc, service) => {
      return acc + service.price;
    }, 0);
    return premium + services;
  };

  return (
    <div className={`finish ${classes}`}>
      <div className="finish__details">
        <div className="finish__plan">
          <div className="finish__plan__name">
            <p>{`${ctx.premium.name} (${
              ctx.monthlyPlan ? "Monthly" : "Yearly"
            })`}</p>
            <button className="change-btn" onClick={changeClickHandler}>
              Change
            </button>
          </div>
          <p className="finish__plan__price">{`$${ctx.premium.cost}/${
            ctx.monthlyPlan ? "mo" : "yr"
          }`}</p>
        </div>

        <div className="finish__services">
          {ctx.services.map((service, index) => (
            <p key={index}>
              <span className="finish__services__name">{service.name}</span>
              <span className="finish__services__price">{`$${service.price}/${
                ctx.monthlyPlan ? "mo" : "yr"
              }`}</span>
            </p>
          ))}
        </div>
      </div>
      <p>
        <span className="finish__total">{`Total(per ${
          ctx.monthlyPlan ? "month" : "year"
        })`}</span>
        <span className="finish__total-price">{`+$${calculateTotal()}/${
          ctx.monthlyPlan ? "mo" : "yr"
        }`}</span>
      </p>
    </div>
  );
};

export default Finish;
