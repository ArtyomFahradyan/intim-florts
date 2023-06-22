import React from "react";
import { Divider, Box } from "@mui/material";
import { ReactComponent as Logo } from "assets/icons/Logo.svg";
import SignUpModal from "./components/SignUpModal";
import { Frame1, Frame2, Footer, LogoWrapper, Links } from "./styles";

function Home() {
  return (
    <>
      <div>
        <Frame1 />
        <Frame2 />
      </div>
      <Footer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Links>
          <a href="">Terms</a>
          <Divider orientation="vertical" flexItem />
          <a href="">Policy</a>
          <Divider orientation="vertical" flexItem />
          <a href="">Cookie Policy</a>
          <Divider orientation="vertical" flexItem />
          <a href="">Help Center</a>
        </Links>
        <Divider orientation="horizontal" />
        <LogoWrapper>
          <Box sx={{ color: "text.disabled" }} display="block">
            © 2023 Intim Florts | All Rights Reserved.
          </Box>
        </LogoWrapper>
      </Footer>
      <SignUpModal />
    </>
  );
}

export default Home;
