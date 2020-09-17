import React from "react";
import { styled } from "../utils/theme";

interface NavigationProps {
  readonly icon: JSX.Element;
}

interface NavigationPageListItemProps {
  readonly bold?: boolean;
}

const StyledNavigation = styled.div`
  display: flex;
  gap: 5rem;

  @media only screen and (min-width: 560px) {
  }

  @media only screen and (min-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 10rem;
  }
`;

const StyledIconWrapper = styled.div``;

const StyledNavigationPageList = styled.ul`
  padding-left: 1.5rem;
  list-style-type: none;
  text-align: left;
  color: ${(props) => props.theme.colors.colorText};
`;

const StyledNavigationPageListItem = styled.li<NavigationPageListItemProps>`
  transition: all 0.2s;
  margin-bottom: 1.5rem;
  ${(props) => props.bold && "font-weight: 600;"}

  &:hover {
    transform: translateY(-0.1rem);
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledNavigationSearch = styled.li`
  padding: 1rem 1.5rem;
  margin-top: 3rem;
  background-color: ${(props) => props.theme.colors.colorShackPageBackground};
  border-radius: 0.5rem;
  width: 13rem;
`;

export const NavigationPageList: React.FC = ({ children }) => (
  <StyledNavigationPageList>{children}</StyledNavigationPageList>
);

export const NavigationPageListItem: React.FC<NavigationPageListItemProps> = ({
  children,
  bold,
}) => (
  <StyledNavigationPageListItem bold={bold}>
    {children}
  </StyledNavigationPageListItem>
);

export const NavigationSearch: React.FC = ({ children }) => (
  <StyledNavigationSearch>{children}</StyledNavigationSearch>
);

export const Navigation: React.SFC<NavigationProps> = ({ icon, children }) => {
  return (
    <StyledNavigation>
      <StyledIconWrapper>{icon}</StyledIconWrapper>
      {children}
    </StyledNavigation>
  );
};
