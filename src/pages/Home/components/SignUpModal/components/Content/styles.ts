import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ContentWrapper = styled(Box)`
  margin: 40px 120px;

  @media screen and (max-width: 950px) {
    && {
      margin: 40px 0;
    }
  }
  @media screen and (max-width: 800px) {
    && {
      margin: 40px 0;
    }
  }
`;
export const Buttons = styled("div")`
  button {
    margin-top: 8px;
    color: #212b36;
    height: 48px;
  }
`;
