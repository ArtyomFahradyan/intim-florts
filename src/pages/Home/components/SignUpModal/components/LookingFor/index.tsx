import React, { MouseEvent } from "react";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { UserSelectors, useUserActions } from "@redux";
import { LookingType } from "types";
import { steps } from "constants/steps";
import { StyledButton } from "./styles";

function LookingFor() {
  const { setUserLookingType, setCurrentStep } = useUserActions();
  const user = useSelector(UserSelectors.getUser);

  const handleSelect = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    setUserLookingType(target.name as LookingType);
    setCurrentStep(steps[1]);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%", margin: "0" }} direction="column">
      <StyledButton
        className={
          user.looking_type && user.looking_type !== LookingType.casualDating
            ? "not-selected"
            : ""
        }
        name={LookingType.casualDating}
        onClick={handleSelect}
        variant="outlined"
      >
        Casual Dating
      </StyledButton>
      <StyledButton
        className={
          user.looking_type && user.looking_type !== LookingType.coupleOfDates
            ? "not-selected"
            : ""
        }
        name={LookingType.coupleOfDates}
        onClick={handleSelect}
        variant="outlined"
      >
        Couple of Dates
      </StyledButton>
      <StyledButton
        className={
          user.looking_type &&
          user.looking_type !== LookingType.seriousRelationship
            ? "not-selected"
            : ""
        }
        name={LookingType.seriousRelationship}
        onClick={handleSelect}
        variant="outlined"
      >
        Serious Relationship
      </StyledButton>
    </Stack>
  );
}

export default LookingFor;
