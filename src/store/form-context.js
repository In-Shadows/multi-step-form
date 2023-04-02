import React, { useEffect } from "react";
import { useState } from "react";

const FormContext = React.createContext({
  monthlyPlan: true,
  switchPlan: () => {},
  premium: {},
  services: [],
  addService: () => {},
  removeService: () => {},
});

let flag1 = 1;
let flag2 = 1;

// Context Provider
export const FormContextProvider = (props) => {
  const [plan, setPlan] = useState(true);
  const [premium, setPremium] = useState({ name: "Arcade", cost: 9 });
  const [services, setServices] = useState([]);

  useEffect(() => {
    setPremium((prev) => {
      const updatedPremium = { ...prev };
      if (plan && flag1 === 1) {
      } else if (!plan && flag1 === 1) {
        updatedPremium.cost = updatedPremium.cost * 10;
        flag1 = 2;
      } else if (plan && flag1 === 2) {
        updatedPremium.cost = updatedPremium.cost / 10;
        flag1 = 1;
      }
      return updatedPremium;
    });
  }, [plan]);

  useEffect(() => {
    setServices((prev) => {
      const updatedServices = [...prev];
      if (plan && flag2 === 1) {
      } else if (!plan && flag2 === 1) {
        updatedServices.forEach((ser) => {
          ser.price *= 10;
        });
        flag2 = 2;
      } else if (plan && flag2 === 2) {
        updatedServices.forEach((ser) => {
          ser.price /= 10;
        });
        flag2 = 1;
      }
      return updatedServices;
    });
  }, [plan]);

  // to change plan
  const updatePlan = () => {
    setPlan((prev) => !prev);
  };

  // to set the premium plan selected by the user
  const selectPremium = (planPremium) => {
    const monthlyCost = parseInt(planPremium.cost.slice(1));
    setPremium({
      name: planPremium.name,
      cost: plan ? monthlyCost : monthlyCost * 10,
    });
  };

  ///////////////////////////////////////////////////
  const findServiceName = (str) => {
    if (str.at(0) === "O") {
      return "Online Service";
    }
    if (str.at(0) === "L") {
      return "Larger Storage";
    }
    if (str.at(0) === "C") {
      return "Customizable Profile";
    }
  };

  // a function to add an additional service
  const addService = (ser) => {
    const serviceName = findServiceName(ser);
    const servicePrice = plan
      ? parseInt(ser.slice(2))
      : parseInt(ser.slice(2)) * 10;
    console.log(servicePrice);
    const service = { name: serviceName, price: servicePrice };
    const updatedServices = [...services];
    updatedServices.push(service);
    setServices(updatedServices);
  };

  // a function to remove an additional service
  const removeService = (ser) => {
    const serviceName = findServiceName(ser);
    const updatedServices = [...services].filter(
      (service) => service.name !== serviceName
    );
    setServices(updatedServices);
  };

  return (
    <FormContext.Provider
      value={{
        monthlyPlan: plan,
        switchPlan: updatePlan,
        premium,
        selectPremium,
        services,
        addService,
        removeService,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
