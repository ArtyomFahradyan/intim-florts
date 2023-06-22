import { styled } from "@mui/system";
import { Box, LinearProgress } from "@mui/material";

export const IconsWrapper = styled(Box)`
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .completed {
    path {
      fill: #ffdc22;
      stroke: #ffdc22;
    }
  }
  .active {
    path {
      fill: #f76448;
      stroke: #f76448;
    }
  }
`;
export const ProgressBar = styled("div")`
  padding: 0 124px;

  @media screen and (max-width: 950px) {
    padding: 0 62px;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const BorderLinearProgress = styled(LinearProgress)`
  height: 10px;
  border-radius: 5px;
  background-color: #e5e8eb;

  .MuiLinearProgress-bar {
    background-color: #ffdc22 !important;
  }
`;
