import React from "react";
import { styled } from "../utils/theme";

const StyledPageContent = styled.div`
  width: 100%;
  padding: 2rem;

  @media only screen and (min-width: 960px) {
    width: 80%;
  }
`;

export const PageContent: React.FC = ({ children }) => {
  return <StyledPageContent>{children}</StyledPageContent>;
};
