import React from "react";
import { Looking, Step } from "../types";
import LookingFor from "pages/Home/components/SignUpModal/components/LookingFor";
import ChooseAType from "pages/Home/components/SignUpModal/components/ChooseAType";
import BirthDate from "pages/Home/components/SignUpModal/components/BirthDate";
import Location from "pages/Home/components/SignUpModal/components/Location";
import Email from "pages/Home/components/SignUpModal/components/Email";
import UserName from "../pages/Home/components/SignUpModal/components/UserName";
import Password from "../pages/Home/components/SignUpModal/components/Password";

export const steps: Step[] = [
  {
    id: 1,
    info: "",
    message: "What are you looking for?",
    type: "looking",
    component: <LookingFor />,
    showNext: false,
  },
  {
    id: 2,
    info: "",
    message: "What is your gender?",
    type: Looking.iam,
    component: <ChooseAType type={Looking.iam} />,
    showNext: false,
  },
  {
    id: 3,
    info: "",
    message: "Who are you looking for?",
    type: Looking.seeking,
    component: <ChooseAType type={Looking.seeking} />,
    showNext: false,
  },
  {
    id: 4,
    info: "You must be at least 18 years old to use Intim Flort",
    message: "What is your age?",
    type: "date",
    component: <BirthDate />,
    showNext: true,
  },
  {
    id: 5,
    info: "Your location will never be shared with third parties, you data is secure",
    message: "What is your location",
    type: "location",
    component: <Location />,
    showNext: false,
  },
  {
    id: 6,
    info: "",
    message: "Choose a username",
    type: "username",
    component: <UserName />,
  },
  {
    id: 7,
    info: "More than 6 characters. Includes at least 1 number",
    message: "Set  your password",
    type: "password",
    component: <Password />,
  },
  {
    id: 8,
    info: "",
    message: "Add your email address",
    type: "email",
    component: <Email />,
  },
];

export const btnText = {
  iamFemale: "I am a man",
  iamMale: "I am a woman",
  seekingFemale: "Seeking a woman",
  seekingMale: "Seeking a man",
};
