import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { UserSelectors, useUserActions } from "@redux";
import Message from "../Message";
import { steps } from "constants/steps";
import { Buttons, ContentWrapper } from "./styles";
function Content() {
  const { setCurrentStep } = useUserActions();
  const step = useSelector(UserSelectors.getStep);

  const handleBack = () => {
    const prevStep = steps.find(({ id }) => id === step.id - 1);
    if (prevStep) setCurrentStep(prevStep);
  };

  return (
    <ContentWrapper>
      <Message message={step.message} info={step.info} />
      {step.component}
      <Buttons>
        {step.type !== "looking" && (
          <Button onClick={handleBack} fullWidth variant="text">
            Back
          </Button>
        )}
      </Buttons>
    </ContentWrapper>
  );
}

export default Content;
