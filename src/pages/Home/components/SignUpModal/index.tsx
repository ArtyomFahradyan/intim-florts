import React, { useState } from "react";
import { Typography, Divider, Link } from "@mui/material";
import Content from "./components/Content";
import Progress from "./components/Progress";
import { Footer, StyledDialog } from "./styles";

function SignUpModal() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledDialog
      open={open}
      sx={{ padding: "24px 0" }}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <Progress />
      <Content />
      <Divider orientation="horizontal" flexItem />
      <Footer sx={{ width: "100%" }}>
        <Typography>
          Already have an account? <Link>Log In</Link>
        </Typography>
      </Footer>
    </StyledDialog>
  );
}

export default SignUpModal;
