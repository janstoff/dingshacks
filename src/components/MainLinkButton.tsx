import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export interface MainLinkButtonProps {
  readonly color?: "primary" | "secondary";
  readonly type?: "submit";
  readonly href?: string;
  readonly onClick?: () => void;
}

const fadeInAnimation = keyframes`
   0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledMainLinkButton = styled.button<Pick<MainLinkButtonProps, "color">>`
  border: none;
  width: 12rem;
  padding: 1rem 3rem;
  font: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  outline: inherit;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.color === "secondary"
      ? props.theme.colors.colorSecondaryLight
      : props.theme.colors.colorPrimaryLight};
  color: ${(props) => props.theme.colors.colorTertiary};
  text-decoration: none; /* no underline */
  font-weight: 600;
  border-radius: 10rem;
  transition: all 0.2s;
  animation: ${fadeInAnimation} 0.5s ease-out 1s;
  animation-fill-mode: backwards; /* apply the 0% animation styling at the start of the animation */

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
    background-color: $color-primary-light;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transition: all 0.4s;
    animation: fadeIn 1s ease-out 2s;
  }

  &:hover::after {
    transform: scale(1.1);
    opacity: 0;
  }

  @media only screen and (min-width: 560px) {
    width: 20rem;
    padding: 1.5rem 4rem;
    font-size: 2rem;
  }
`;

export const MainLinkButton: React.SFC<MainLinkButtonProps> = ({
  color,
  type,
  href,
  onClick,
  children,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return href ? (
    <Link to={href} style={{ textDecoration: "none" }}>
      <StyledMainLinkButton onClick={handleClick} color={color} type={type}>
        {children}
      </StyledMainLinkButton>
    </Link>
  ) : (
    <StyledMainLinkButton onClick={handleClick} color={color} type={type}>
      {children}
    </StyledMainLinkButton>
  );
};
