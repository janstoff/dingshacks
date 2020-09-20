import React from "react";
import { styled } from "../utils/theme";
import { Link } from "react-router-dom";

interface NavigationAddShackButtonProps {
  readonly href: string;
  readonly home?: boolean;
}

const StyledNavigationAddShackButtonWrapper = styled.div<
  Pick<NavigationAddShackButtonProps, "home">
>`
  display: flex;
  flex-direction: ${(props) => (props.home ? "row" : "column")};
  align-items: flex-start;
  padding-left: 1.5rem;
  gap: 1rem;
`;

const StyledNavigationAddShackButton = styled.button`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: none;
  text-align: center;
  font-size: 3rem;
  background: ${(props) => props.theme.colors.colorSecondaryLight};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.colorSecondary};
  }
`;

const StyledNavigationAddShackButtonDescription = styled.p`
  font-size: 1rem;
  text-align: left;
`;

export const NavigationAddShackButton: React.FC<NavigationAddShackButtonProps> = ({
  href,
  home,
  children,
}) => (
  <StyledNavigationAddShackButtonWrapper home={home}>
    <Link to={href}>
      <StyledNavigationAddShackButton>+</StyledNavigationAddShackButton>
    </Link>
    <StyledNavigationAddShackButtonDescription>
      {children}
    </StyledNavigationAddShackButtonDescription>
  </StyledNavigationAddShackButtonWrapper>
);
