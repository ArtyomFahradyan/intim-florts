import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  border-radius: 16px;
  width: 100%;
  height: 48px;

  &.not-selected {
    border-color: #b2b3b5;
    color: #b2b3b5;
  }
`;
