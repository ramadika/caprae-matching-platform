import { useState } from "react";
import { useNavigate } from "react-router";

export function useBuyerOnboard() {
  const [onboardingStep, setOnboardingStep] = useState(1);
  const navigate = useNavigate();

  const totalSteps = 3;

  const nextStep = () => {
    if (onboardingStep < totalSteps) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      navigate("/dashboard/buyer");
      setOnboardingStep(1);
    }
  };

  const prevStep = () => {
    if (onboardingStep > 1) {
      setOnboardingStep(onboardingStep - 1);
    } else {
      navigate("/");
    }
  };

  return {
    onboardingStep,
    totalSteps,
    nextStep,
    prevStep,
  };
}
