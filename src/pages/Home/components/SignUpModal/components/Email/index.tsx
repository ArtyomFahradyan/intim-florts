import React, { ChangeEvent, useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Alert,
  Snackbar,
} from "@mui/material";
import { UserSelectors, useUserActions } from "@redux";
import { useSelector } from "react-redux";
import { endRegistration } from "requests";
import { TermsServices } from "./styles";

function Email() {
  const user = useSelector(UserSelectors.getUser);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const [email, setEmail] = useState(user.email);
  const [termsAndService, setTermsAndServices] = useState(false);
  const { setUserEmail } = useUserActions();

  const handleComplete = async () => {
    setUserEmail(email);
    try {
      await endRegistration(user, user.userId);
      setOpenSuccess(true);
    } catch (e) {
      setOpenError(true);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermsAndServices(e.target.checked);
  };

  const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <FormGroup>
      <TextField
        error={!!email && !isValidEmail}
        fullWidth
        value={email}
        onChange={handleChange}
        label="Email"
        variant="outlined"
      />
      <FormControlLabel
        sx={{ marginTop: "20px" }}
        control={
          <Checkbox value={termsAndService} onChange={handleTermsChange} />
        }
        label={
          <TermsServices sx={{ width: "100%" }} variant="subtitle1">
            I have read and accept the&nbsp;
            <span>Terms of Service</span>
            &nbsp;and our&nbsp;
            <span>Privacy Statement.</span>
          </TermsServices>
        }
      />
      <Button
        style={{ marginTop: "35px", height: "48px" }}
        onClick={handleComplete}
        disabled={!(!!email && isValidEmail) || !termsAndService}
        fullWidth
        variant="contained"
      >
        Complete
      </Button>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Account successfuly created!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Something went wrong!
        </Alert>
      </Snackbar>
    </FormGroup>
  );
}

export default Email;
