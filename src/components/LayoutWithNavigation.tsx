import React from "react";
import { styled } from "../utils/theme";

const StyledLayoutWithNavigation = styled.div`
  display: grid;
  padding: 0.2rem;
  gap: 3rem;
  grid-template-areas:
    "navigation"
    "shackPage";

  @media only screen and (min-width: 560px) {
    padding: 1rem;
    grid-template-areas:
      "navigation"
      "shackPage";
  }

  @media only screen and (min-width: 960px) {
    padding: 2rem;
    grid-template-areas: "navigation shackPage";
  }
`;

export const LayoutWithNavigation: React.SFC = ({ children }) => {
  return <StyledLayoutWithNavigation>{children}</StyledLayoutWithNavigation>;
};
