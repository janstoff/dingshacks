import React from "react";
import { styled } from "../utils/theme";

export interface ReviewButtonProps {
  readonly onClick: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  readonly href: string;
  readonly icon?: JSX.Element;
}

const StyledReviewButton = styled.button`
  border: none;
  font-size: 1rem;
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

export const ReviewButton: React.SFC<ReviewButtonProps> = ({
  onClick,
  children,
}) => {
  const handleClick = () => {
    onClick();
    console.log("Clicked main link button!");
  };

  return (
    <StyledReviewButton onClick={() => handleClick()}>
      {children}
    </StyledReviewButton>
  );
};
