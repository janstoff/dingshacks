import React from "react";
import { styled } from "../utils/theme";

const StyledNavigationMobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationMobileHeader: React.FC = ({ children }) => (
  <StyledNavigationMobileHeader>{children}</StyledNavigationMobileHeader>
);
