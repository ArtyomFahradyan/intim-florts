import React, { ChangeEvent, useState } from "react";
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { steps } from "constants/steps";
import { UserSelectors, useUserActions } from "@redux";
import { startRegistration } from "requests";

function UserName() {
  const { setCurrentStep, setUserName: setName, setUserId } = useUserActions();
  const [open, setOpen] = useState(false);
  const user = useSelector(UserSelectors.getUser);
  const [userName, setUserName] = useState(user.username);

  const handleNext = async () => {
    try {
      const res = await startRegistration(userName);
      setCurrentStep(steps[6]);
      setName(userName);
      setUserId(res.Data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      setOpen(true);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const isValid = userName.length < 12 && /^[a-zA-Z0-9]+$|_/.test(userName);

  return (
    <>
      <TextField
        fullWidth
        autoComplete="off"
        error={!isValid}
        value={userName}
        onChange={handleChange}
        label="Username"
        variant="outlined"
      />
      <Button
        style={{ marginTop: "35px", height: "48px" }}
        onClick={handleNext}
        disabled={!userName || !isValid}
        className="next"
        fullWidth
        variant="contained"
      >
        Next
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Not a valid user name!
        </Alert>
      </Snackbar>
    </>
  );
}

export default UserName;
