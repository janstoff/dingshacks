import React from "react";
import { styled } from "../utils/theme";

const StyledResultsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledResultsHeadline = styled.h2`
  color: inherit;
  text-align: left;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

export const ResultsLayout: React.FC = ({ children }) => (
  <StyledResultsLayout>{children}</StyledResultsLayout>
);

export const ResultsHeadline: React.FC = ({ children }) => (
  <StyledResultsHeadline>{children}</StyledResultsHeadline>
);
