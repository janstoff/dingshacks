import React from "react";
import { styled } from "../utils/theme";

interface SectionProps {
  readonly id: string;
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15rem 0 20rem 0;
  @media only screen and (max-width: 1820px) {
    margin: 15rem 0 20rem 0;
  }
  @media only screen and (max-width: 1240px) {
    margin: 15rem 0 20rem 0;
  }
  @media only screen and (max-width: 1040px) {
    margin: 15rem 0 20rem 0;
  }
  @media only screen and (max-width: 760px) {
    margin: 15rem 0 20rem 0;
  }
  @media only screen and (max-width: 430px) {
    margin: 15rem 0 20rem 0;
  }
`;

export const Section: React.SFC<SectionProps> = ({ children, id }) => (
  <StyledSection id={id}>{children}</StyledSection>
);

const StyledSectionHeadline = styled.h1`
  color: inherit;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
  margin-top: 2rem;
`;

export const SectionHeadline: React.SFC = ({ children }) => (
  <StyledSectionHeadline>{children}</StyledSectionHeadline>
);

const StyledSectionSubHeadline = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

export const SectionSubHeadline: React.SFC = ({ children }) => (
  <StyledSectionSubHeadline>{children}</StyledSectionSubHeadline>
);

const StyledSectionText = styled.p`
  text-align: left;
  margin-bottom: 1rem;
`;

export const SectionText: React.SFC = ({ children }) => (
  <StyledSectionText>{children}</StyledSectionText>
);
