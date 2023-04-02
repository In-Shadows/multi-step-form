import React, { useContext } from "react";

import "./AddOnsForm.scss";
import Checkbox from "./Checkbox";
import FormContext from "../../store/form-context";

const addons = [
  {
    name: "Online Service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

const AddOnsForm = ({ classes }) => {
  return (
    <fieldset className={`form__addons ${classes}`}>
      {addons.map((addon, index) => (
        <Checkbox
          key={index}
          name={addon.name}
          description={addon.description}
          price={addon.price}
        />
      ))}
    </fieldset>
  );
};

export default AddOnsForm;
