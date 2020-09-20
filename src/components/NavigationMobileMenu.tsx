import React from "react";
import { styled } from "../utils/theme";

interface NavigationMobileMenuProps {
  readonly open: boolean;
  readonly icon: JSX.Element;
  readonly closeButton: JSX.Element;
}

const StyledNavigationMobileMenu = styled.div<
  Pick<NavigationMobileMenuProps, "open">
>`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  padding: 1rem;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);

  @media only screen and (min-width: 460px) {
    width: 80%;
    padding: 2rem;
  }

  @media only screen and (min-width: 560px) {
    width: 70%;
    padding: 2rem;
  }

  @media only screen and (min-width: 660px) {
    width: 60%;
    padding: 2rem;
  }

  @media only screen and (min-width: 760px) {
    width: 40%;
    padding: 2rem;
  }
`;

const StyledNavigationMobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavigationMobileMenu: React.FC<NavigationMobileMenuProps> = ({
  open,
  icon,
  closeButton,
  children,
}) => (
  <StyledNavigationMobileMenu open={open}>
    <StyledNavigationMobileHeader>
      {icon}
      {closeButton}
    </StyledNavigationMobileHeader>
    {children}
  </StyledNavigationMobileMenu>
);
