import React from "react";
import { styled } from "../utils/theme";

const StyledLandingLayout = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  @media only screen and (max-width: 1820px) {
    padding: 20rem;
  }
  @media only screen and (max-width: 1240px) {
    padding: 20rem;
  }
  @media only screen and (max-width: 1040px) {
    padding: 10rem;
  }
  @media only screen and (max-width: 760px) {
    padding: 6rem;
  }
  @media only screen and (max-width: 430px) {
    padding: 4rem;
  }
`;

export const LandingLayout: React.SFC = ({ children }) => (
  <StyledLandingLayout>{children}</StyledLandingLayout>
);
