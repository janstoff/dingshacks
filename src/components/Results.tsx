import React from "react";
import { styled } from "../utils/theme";

const StyledResultsLayout = styled.div`
  width: 80%;
`;

const StyledResultsHeadlinesWrapper = styled.div`
  width: 100%;
`;

const StyledResultsHeadline = styled.h2`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const StyledResultsSubHeadline = styled.h3`
  text-align: left;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

export const ResultsLayout: React.FC = ({ children }) => (
  <StyledResultsLayout>{children}</StyledResultsLayout>
);

export const ResultsHeadlinesWrapper: React.FC = ({ children }) => (
  <StyledResultsHeadlinesWrapper>{children}</StyledResultsHeadlinesWrapper>
);

export const ResultsHeadline: React.FC = ({ children }) => (
  <StyledResultsHeadline>{children}</StyledResultsHeadline>
);

export const ResultsSubHeadline: React.FC = ({ children }) => (
  <StyledResultsSubHeadline>{children}</StyledResultsSubHeadline>
);
