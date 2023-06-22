import { styled } from "@mui/system";

export const Row = styled("div")`
  display: flex;

  > div {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 700px) {
    display: block;

    > div {
      width: 100%;
    }
  }
`;
