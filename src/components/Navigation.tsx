import React from "react";
import { styled } from "../utils/theme";
import { Page } from "../utils/config";
import { Link } from "react-router-dom";

interface NavigationProps {
  readonly icon: JSX.Element;
  readonly pages: Page[];
  readonly search: JSX.Element;
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

const StyledList = styled.ul`
  list-style-type: none;
  text-align: left;
  color: ${(props) => props.theme.colors.colorText};
`;

const StyledListItem = styled.li`
  padding-left: 1.5rem;
  transition: all 0.2s;
  margin-bottom: 1.5rem;

  &:hover {
    transform: translateY(-0.1rem);
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledSearchWrapper = styled.li`
  padding: 1rem 1.5rem;
  margin-top: 3rem;
  background-color: ${(props) => props.theme.colors.colorShackPageBackground};
  border-radius: 0.5rem;
  width: 13rem;
`;

export const Navigation: React.SFC<NavigationProps> = ({
  icon,
  pages,
  search,
}) => {
  return (
    <StyledNavigation>
      <StyledIconWrapper>{icon}</StyledIconWrapper>
      <StyledList>
        {pages.map((page) => (
          <StyledListItem>
            <Link
              to={page.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {page.name}
            </Link>
          </StyledListItem>
        ))}
        <StyledSearchWrapper>{search}</StyledSearchWrapper>
      </StyledList>
    </StyledNavigation>
  );
};
