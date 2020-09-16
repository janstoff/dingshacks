import React from "react";
import { styled } from "../utils/theme";

const StyledLayoutWithNavigation = styled.div`
  display: flex;
  padding: 0.2rem;
  gap: 3rem;
  flex-direction: column;

  @media only screen and (min-width: 560px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 960px) {
    padding: 2rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LayoutWithNavigation: React.SFC = ({ children }) => {
  return <StyledLayoutWithNavigation>{children}</StyledLayoutWithNavigation>;
};
