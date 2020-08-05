import React from "react";
import styled, { keyframes } from "styled-components";

interface LandingHeadlineProps {
  readonly primaryHeadline: string;
  readonly secondaryHeadline: string;
}

const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

const StyledHeadline = styled.h1`
  text-transform: uppercase;
  backface-visibility: hidden; /* prevent animation shaking */
  margin-bottom: 6rem;
`;

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

const StyledPrimaryHeadline = styled.span`
  display: block;
  font-weight: 400;

  animation-name: ${moveInLeftAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-out;

  @media only screen and (max-width: 1820px) {
    font-size: 4rem;
    letter-spacing: 3.5rem;
  }
  @media only screen and (max-width: 1240px) {
    font-size: 3.5rem;
    letter-spacing: 3rem;
  }
  @media only screen and (max-width: 1040px) {
    font-size: 4rem;
    letter-spacing: 2.8rem;
  }
  @media only screen and (max-width: 760px) {
    font-size: 4.5rem;
    letter-spacing: 2rem;
  }
  @media only screen and (max-width: 430px) {
    font-size: 5rem;
    letter-spacing: 1.8rem;
  }
`;

const StyledSecondaryHeadline = styled.span`
  display: block;
  font-weight: 400;

  @media only screen and (max-width: 1820px) {
    font-size: 2rem;
    letter-spacing: 2rem;
  }
  @media only screen and (max-width: 1240px) {
    font-size: 1.5rem;
    letter-spacing: 1.5rem;
  }
  @media only screen and (max-width: 1040px) {
    font-size: 1.8rem;
    letter-spacing: 1.3rem;
  }
  @media only screen and (max-width: 760px) {
    font-size: 2rem;
    letter-spacing: 1.2rem;
  }
  @media only screen and (max-width: 430px) {
    font-size: 2rem;
    letter-spacing: 1rem;
  }

  animation: ${moveInRightAnimation} 1s ease-out; /* shorthand animation settings */
`;

export const LandingHeadline: React.SFC<LandingHeadlineProps> = ({
  primaryHeadline,
  secondaryHeadline,
}) => (
  <StyledHeadlineContainer>
    <StyledHeadline>
      <StyledPrimaryHeadline>{primaryHeadline}</StyledPrimaryHeadline>
      <StyledSecondaryHeadline>{secondaryHeadline}</StyledSecondaryHeadline>
    </StyledHeadline>
  </StyledHeadlineContainer>
);
