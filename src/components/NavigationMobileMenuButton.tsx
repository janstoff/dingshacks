import React from "react";
import { styled } from "../utils/theme";

const StyledNavigationMobileMenuButton = styled.button`
  display: inline-block;
  height: 8rem;
  width: 8rem;
  border: none;
  padding: 2.7rem 2.7rem;
  margin: 0;
  text-decoration: none;
  background: none;
  cursor: pointer;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    transform: translateY(0.2rem);
  }

  &:active {
    transform: translateY(0.2rem);
  }
`;

export const NavigationMobileMenuButton: React.FC = ({ children }) => (
  <StyledNavigationMobileMenuButton>
    {children}
  </StyledNavigationMobileMenuButton>
);
