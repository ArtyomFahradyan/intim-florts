import React from "react";
import { Box } from "@mui/material";
import { UserSelectors } from "@redux";
import { ReactComponent as Date } from "assets/icons/date.svg";
import { ReactComponent as Gender } from "assets/icons/gender.svg";
import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
import { ReactComponent as Lock } from "assets/icons/lock.svg";
import { ReactComponent as Looking } from "assets/icons/looking.svg";
import { ReactComponent as Mail } from "assets/icons/mail.svg";
import { ReactComponent as Target } from "assets/icons/target.svg";
import { ReactComponent as User } from "assets/icons/user.svg";
import { steps } from "constants/steps";
import { BorderLinearProgress, ProgressBar, IconsWrapper } from "./styles";
import { useSelector } from "react-redux";

function Progress() {
  const step = useSelector(UserSelectors.getStep);
  const user = useSelector(UserSelectors.getUser);

  return (
    <ProgressBar>
      <IconsWrapper sx={{ width: "100%" }}>
        <Looking
          className={
            step.id === steps[0].id
              ? "active"
              : "" + user.looking_type
              ? "completed"
              : ""
          }
        />
        <Gender
          className={
            step.id === steps[1].id
              ? "active"
              : "" + user.gender
              ? "completed"
              : ""
          }
        />
        <Target
          className={
            step.id === steps[2].id
              ? "active"
              : "" + user.looking_for
              ? "completed"
              : ""
          }
        />
        <Date
          className={
            step.id === steps[3].id
              ? "active"
              : "" + user.DOB
              ? "completed"
              : ""
          }
        />
        <LocationIcon
          className={
            step.id === steps[4].id
              ? "active"
              : "" + user.location
              ? "completed"
              : ""
          }
        />
        <User
          className={
            step.id === steps[5].id
              ? "active"
              : "" + user.username
              ? "completed"
              : ""
          }
        />
        <Lock
          className={
            step.id === steps[6].id
              ? "active"
              : "" + user.password
              ? "completed"
              : ""
          }
        />
        <Mail
          className={
            step.id === steps[7].id
              ? "active"
              : "" + user.email
              ? "completed"
              : ""
          }
        />
      </IconsWrapper>
      <Box sx={{ width: "100%" }}>
        <BorderLinearProgress
          variant="determinate"
          value={2 + (step.id - 1) * 14}
        />
      </Box>
    </ProgressBar>
  );
}

export default Progress;
