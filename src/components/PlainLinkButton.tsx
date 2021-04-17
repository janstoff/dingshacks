import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export interface PlainLinkButtonProps {
  readonly color?: string;
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

const StyledPlainLinkButton = styled.button<PlainLinkButtonProps>`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  border-bottom: 1px solid ${(props) => props.color};
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${(props) => props.color};
  font-weight: 600;
  transition: all 0.2s;
  animation: ${fadeInAnimation} 0.2s ease-out 1s;
  animation-fill-mode: backwards; /* apply the 0% animation styling at the start of the animation */

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  @media only screen and (min-width: 560px) {
    font-size: 1.5rem;
  }
`;

export const PlainLinkButton: React.FC<PlainLinkButtonProps> = ({
  color,
  href,
  onClick,
  children,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return href ? (
    <Link to={href} style={{ textDecoration: "none" }}>
      <StyledPlainLinkButton onClick={handleClick} color={color}>
        {children}
      </StyledPlainLinkButton>
    </Link>
  ) : (
    <StyledPlainLinkButton onClick={handleClick} color={color}>
      {children}
    </StyledPlainLinkButton>
  );
};
