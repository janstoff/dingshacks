import React from "react";
import { styled } from "../utils/theme";

interface NavigationMobileMenuCloseButtonProps {
  readonly onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledNavigationMobileMenuCloseButton = styled.button`
  display: inline-block;
  height: 8rem;
  width: 8rem;
  border: none;
  font-size: 2rem;
  padding: 3.2rem 3.2rem;
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

export const NavigationMobileMenuCloseButton: React.FC<NavigationMobileMenuCloseButtonProps> = ({
  children,
  onClick,
}) => (
  <StyledNavigationMobileMenuCloseButton onClick={(event) => onClick(event)}>
    {children}
  </StyledNavigationMobileMenuCloseButton>
);
