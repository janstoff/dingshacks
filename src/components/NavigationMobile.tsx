import React from "react";
import { styled } from "../utils/theme";

const StyledNavigationMobile = styled.nav``;

const StyledNavigationMobileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationMobile: React.FC = ({ children }) => (
  <StyledNavigationMobile>{children}</StyledNavigationMobile>
);

export const NavigationMobileHeader: React.FC = ({ children }) => (
  <StyledNavigationMobileHeader>{children}</StyledNavigationMobileHeader>
);
