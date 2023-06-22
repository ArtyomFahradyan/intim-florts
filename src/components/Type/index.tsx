import React, { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { UserSelectors, useUserActions } from "@redux";
import { Gender, Looking } from "types";
import { btnText, steps } from "constants/steps";
import { SelectButton, Wrapper } from "./styles";

type Props = {
  type: Looking;
  gender: Gender;
};

function Type({ type, gender }: Props) {
  const { setUserGender, setUserLookingFor, setCurrentStep } = useUserActions();
  const user = useSelector(UserSelectors.getUser);
  let isSelected = false;
  if (type === Looking.iam) {
    isSelected = Boolean(user.gender && gender === user.gender);
  } else {
    isSelected = Boolean(user.looking_for && gender === user.looking_for);
  }
  const handleSelect = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    if (type === Looking.seeking) {
      setUserLookingFor(target.name as Gender);
      setCurrentStep(steps[3]);
    } else {
      setUserGender(target.name as Gender);
      setCurrentStep(steps[2]);
    }
  };

  return (
    <Wrapper>
      <img
        className={isSelected ? "selected" : ""}
        src={`./images/${type}${gender}.png`}
        alt="no photo"
      />
      <SelectButton name={gender} onClick={handleSelect} variant="contained">
        {btnText[`${type}${gender}`]}
      </SelectButton>
    </Wrapper>
  );
}

export default Type;
