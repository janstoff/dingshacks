import React from "react";
import { styled } from "../utils/theme";

const StyledPageLayout = styled.div`
  width: 100%;
`;

const StyledPageHeadlinesWrapper = styled.div`
  width: 100%;
`;

const StyledPageHeadline = styled.h2`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const StyledPageSubHeadline = styled.h3`
  text-align: left;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

export const PageLayout: React.FC = ({ children }) => (
  <StyledPageLayout>{children}</StyledPageLayout>
);

export const PageHeadlinesWrapper: React.FC = ({ children }) => (
  <StyledPageHeadlinesWrapper>{children}</StyledPageHeadlinesWrapper>
);

export const PageHeadline: React.FC = ({ children }) => (
  <StyledPageHeadline>{children}</StyledPageHeadline>
);

export const PageSubHeadline: React.FC = ({ children }) => (
  <StyledPageSubHeadline>{children}</StyledPageSubHeadline>
);
