import React from "react";
import { styled } from "../utils/theme";
import { Link } from "react-router-dom";

export interface SearchInNavigationButtonProps {
  readonly href: string;
  readonly icon?: JSX.Element;
}

const StyledSearchInNavigationButton = styled.button`
  border: none;
  font-size: 1rem;
  width: 10rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  color: white;
  text-decoration: none; /* no underline */
  font-weight: 600;
  border-radius: 10rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: ""; /* otherwise the pseudo element would not be active */
    border-radius: 10rem;
    background-color: ${(props) => props.theme.colors.colorPrimary};
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transition: all 0.4s;
  }

  &:hover::after {
    transform: scale(1.1);
    opacity: 0;
  }
`;

export const SearchInNavigationButton: React.SFC<SearchInNavigationButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link to={href}>
      <StyledSearchInNavigationButton>
        {children}
      </StyledSearchInNavigationButton>
    </Link>
  );
};
