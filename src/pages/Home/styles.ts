import { styled } from "@mui/system";

export const Frame1 = styled("div")`
  background-image: url("Frame1.png");
  background-repeat: no-repeat;
  background-size: auto;
  height: 323px;
  padding-bottom: 24px;
`;
export const Frame2 = styled("div")`
  background-image: url("Frame2.png");
  background-size: auto;
  height: 323px;
`;
export const FramesWrapper = styled("div")`
  min-height: 80vh;

  > div {
    background-repeat: repeat-x;
  }
`;

export const Footer = styled("div")``;

export const LogoWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
`;
export const Links = styled("div")`
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 40px;

  .MuiDivider-root {
    border-color: #212b36;
    margin: 0 5px;
  }
`;
