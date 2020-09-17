import React from "react";
import { styled } from "../utils/theme";
import { Link } from "react-router-dom";

export interface NavigationLocateButtonProps {
  readonly href: string;
  readonly icon?: JSX.Element;
}

const StyledNavigationLocateButton = styled.button`
  border: none;
  font-size: 1rem;
  width: 10rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.colorPrimaryLight};
  text-decoration: none; /* no underline */
  font-weight: 600;
  border-radius: 10rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.colorPrimary};
  }
`;

export const NavigationLocateButton: React.SFC<NavigationLocateButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link to={href}>
      <StyledNavigationLocateButton>{children}</StyledNavigationLocateButton>
    </Link>
  );
};
