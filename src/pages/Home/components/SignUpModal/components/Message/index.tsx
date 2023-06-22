import React from "react";
import { Avatar } from "@mui/material";
import { Wrapper, Text, Info } from "./styles";

type Props = {
  message: string;
  info?: string;
};

function Message({ message, info }: Props) {
  return (
    <>
      <Wrapper>
        <Avatar
          sx={{ height: "46px", width: "46px" }}
          alt="Remy Sharp"
          src="./avatar.png"
        />
        <Text>{message}</Text>
      </Wrapper>
      {info && <Info sx={{ color: "text.disabled" }}>{info}</Info>}
    </>
  );
}

export default Message;
