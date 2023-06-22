import React, { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { steps } from "constants/steps";
import { UserSelectors, useUserActions } from "@redux";
import { useSelector } from "react-redux";

function Password() {
  const user = useSelector(UserSelectors.getUser);
  const [password, setPassword] = useState(user.password);
  const { setCurrentStep, setUserPassword } = useUserActions();

  const handleNext = () => {
    setCurrentStep(steps[7]);
    setUserPassword(password);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isValidPassword = password.length > 6 && /\d/.test(password);

  return (
    <>
      <TextField
        fullWidth
        value={password}
        onChange={handleChange}
        type="password"
        label="Password"
        variant="outlined"
      />
      <Button
        style={{ marginTop: "35px", height: "48px" }}
        onClick={handleNext}
        disabled={!isValidPassword}
        className="next"
        fullWidth
        variant="contained"
      >
        Next
      </Button>
    </>
  );
}

export default Password;
