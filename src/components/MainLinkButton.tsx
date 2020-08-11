import React from "react";
import styled, { keyframes } from "styled-components";

export interface MainLinkButtonProps {
  readonly onClick: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  readonly href: string;
  readonly icon?: JSX.Element;
}

const fadeInAnimation = keyframes`
   0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledMainLinkButton = styled.a`
  border: none;
  width: 20rem;
  padding: 1.5rem 4rem;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.colorPrimaryLight};
  color: ${(props) => props.theme.colors.colorSecondary};
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
`;

const StyledIconWrapper = styled.span``;

export const MainLinkButton: React.SFC<MainLinkButtonProps> = ({
  icon,
  onClick,
  href,
  children,
}) => {
  const handleClick = () => {
    onClick();
    console.log("Clicked main link button!");
  };

  return (
    <StyledMainLinkButton href={href} onClick={() => handleClick()}>
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
      {children}
    </StyledMainLinkButton>
  );
};
