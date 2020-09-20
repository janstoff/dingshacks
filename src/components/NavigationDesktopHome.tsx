import React from "react";
import { styled } from "../utils/theme";
import { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
   0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledNavigationDesktopHomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  color: white;
  font-size: 2rem;
  justify-content: space-between;
  background-color: transparent;
  height: auto;
  width: 100%;
`;

const StyledNavigationDesktopHomeSection = styled.nav`
  display: flex;
  justify-content: space-around;
  gap: 5rem;
`;

const StyledNavigationDesktopHomeLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 4rem;
  transition: all 0.2s;

  animation: ${fadeInAnimation} 1.5s ease-out 1.5s;
  animation-fill-mode: backwards;
`;

export const NavigationDesktopHomeHeader: React.FC = ({ children }) => (
  <StyledNavigationDesktopHomeHeader>
    {children}
  </StyledNavigationDesktopHomeHeader>
);

export const NavigationDesktopHomeSection: React.FC = ({ children }) => (
  <StyledNavigationDesktopHomeSection>
    {children}
  </StyledNavigationDesktopHomeSection>
);

export const NavigationDesktopHomeLinks: React.FC = ({ children }) => (
  <StyledNavigationDesktopHomeLinks>
    {children}
  </StyledNavigationDesktopHomeLinks>
);
