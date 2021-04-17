import React from "react";
import styled from "styled-components";

interface LandingHeadlineProps {
  readonly text: string;
}

const StyledPrimaryHeadline = styled.h1`
  font-weight: 300;

  @media only screen and (max-width: 1820px) {
    font-size: 4rem;
    letter-spacing: 3.5rem;
    margin-right: -3.5rem;
    padding-right: 20rem;
    padding-left: 20rem;
  }
  @media only screen and (max-width: 1240px) {
    font-size: 3.5rem;
    letter-spacing: 3rem;
    margin-right: -3rem;
    padding-right: 20rem;
    padding-left: 20rem;
  }
  @media only screen and (max-width: 1040px) {
    font-size: 4rem;
    letter-spacing: 2.8rem;
    margin-right: -2.8rem;
    padding-right: 10rem;
    padding-left: 10rem;
  }
  @media only screen and (max-width: 760px) {
    font-size: 4rem;
    letter-spacing: 2rem;
    margin-right: -2rem;
    padding-right: 6rem;
    padding-left: 6rem;
  }
  @media only screen and (max-width: 430px) {
    font-size: 3rem;
    letter-spacing: 1.4rem;
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

export const LandingHeadline: React.FC<LandingHeadlineProps> = ({ text }) => (
  <StyledPrimaryHeadline>{text}</StyledPrimaryHeadline>
);
