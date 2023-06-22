import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const SelectButton = styled(Button)`
  position: absolute;
  transform: translate(-50%, 130%);
  top: 50%;
  left: 46%;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(3px);
  border-radius: 12px;
  color: #f76448;

  :hover {
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(3px);
    border-radius: 12px;
    color: #f76448;
  }
`;

export const Wrapper = styled("div")`
  position: relative;

  img {
    border-radius: 8px;
    width: 320px;
  }

  .selected {
    border: 2px solid #35e8ff;
  }
`;
