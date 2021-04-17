import React from "react";
import { styled } from "../utils/theme";
import { keyframes } from "styled-components";

const moveInLeftAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(0.5rem);
  }

  100% {
    opacity: 1;
    transform: translate(
      0
    ); /* make the animation go back to the initial state */
  }
`;

const moveInRightAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-0.5rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const StyledLandingLayout = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  color: whitesmoke;
`;

export const LandingLayout: React.FC = ({ children }) => (
  <StyledLandingLayout>{children}</StyledLandingLayout>
);

const StyledLandingBrowserLocationButtonWrapper = styled.div`
  display: flex;
  font-weight: 500;
  text-align: left;

  @media only screen and (max-width: 1820px) {
    font-size: 1.2rem;
    letter-spacing: 1.5rem;
  }
  @media only screen and (max-width: 1240px) {
    font-size: 1.5rem;
    letter-spacing: 1rem;
  }
  @media only screen and (max-width: 1040px) {
    font-size: 1.5rem;
    letter-spacing: 0.8rem;
  }
  @media only screen and (max-width: 760px) {
    font-size: 1.2rem;
    letter-spacing: 0.7rem;
  }
  @media only screen and (max-width: 430px) {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }

  animation: ${moveInRightAnimation} 1s ease-out; /* shorthand animation settings */
`;

export const LandingBrowserLocationButtonWrapper: React.FC = ({ children }) => (
  <StyledLandingBrowserLocationButtonWrapper>
    {children}
  </StyledLandingBrowserLocationButtonWrapper>
);

const StyledLandingCoordinatesSelectionWrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 4px;
  padding: 1rem;
  font-weight: 500;
  text-align: left;

  @media only screen and (max-width: 1820px) {
    font-size: 1.2rem;
    letter-spacing: 1.5rem;
  }
  @media only screen and (max-width: 1240px) {
    font-size: 1.5rem;
    letter-spacing: 1rem;
  }
  @media only screen and (max-width: 1040px) {
    font-size: 1.5rem;
    letter-spacing: 0.8rem;
  }
  @media only screen and (max-width: 760px) {
    font-size: 1.2rem;
    letter-spacing: 0.7rem;
  }
  @media only screen and (max-width: 430px) {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }

  animation: ${moveInLeftAnimation} 1s ease-out; /* shorthand animation settings */
`;

export const LandingCoordinatesSelectionWrapper: React.FC = ({ children }) => (
  <StyledLandingCoordinatesSelectionWrapper>
    {children}
  </StyledLandingCoordinatesSelectionWrapper>
);
