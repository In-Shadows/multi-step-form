import React, { useState } from "react";

import "./styles/_base.scss";
import "./styles/_generalStyles.scss";

import Steps from "./components/Steps";
import CurrentStep from "./components/CurrentStep";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => ++prev);
  const prevStep = (slide = 1) => setStep((prev) => prev - slide);

  return (
    <section className="container">
      <Steps step={step} />
      <CurrentStep step={step} nextStep={nextStep} prevStep={prevStep} />
    </section>
  );
};

export default App;
