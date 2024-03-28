"use client";

import React, { useEffect, useState } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";

const initialFormData = {
  firstName: "",
  lastName: "",
  username: "",
  birthDate: "",
  // city: "",
  // state: "",
  aboutYourself: "",
  travelingDates: "",
  travelingDestinations: "",
  email: "",
  password: "",
  agreeToTerms: false,
};

// interface MultiStepType {
//   user: User | null;
// }
// const defaultValue: MultiStepType = {
//   user: null,
// };

const stepsArray = ["1", "2", "3", "4"];

const MultiStep = ({ showStepNumber }: { showStepNumber: boolean }) => {
  const [step, setStep] = useState("1");
  const [formData, setFormData] = useState(initialFormData);
  // const [user, setUser] = (useState < User) | null(null);

  const handleNextStep = () => {
    if (step === "1") setStep("2");
    else if (step === "2") setStep("3");
    else if (step === "3") setStep("4");
  };

  const handlePrevStep = () => {
    if (step === "4") setStep("3");
    else if (step === "3") setStep("2");
    else if (step === "2") setStep("1");
  };

  const handleChangeInput = (event: {
    target: { name: any; checked: any; value: any };
  }) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === "agreeToTerms") {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleSubmitFormData = () => {
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions");
    } else {
      console.log(formData);
    }
  };

  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === "4") {
      return null;
    }
    return (
      <div className="m-2 mb-4 flex justify-between">
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 rounded-full ${
              item === step ? "bg-blue-500" : ""
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      {renderTopStepNumbers()}

      {step === "1" ? (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === "2" ? (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}

      {step === "3" ? (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}

      {step === "4" ? (
        <StepD
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
    </div>
  );
};

export default MultiStep;
