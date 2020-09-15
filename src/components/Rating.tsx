import React from "react";
import { styled } from "../utils/theme";

interface RatingProps {
  readonly rating: number;
  readonly size?: "normal" | "small";
}

const StyledRating = styled.div<Pick<RatingProps, "size">>`
  font-size: ${(props) => (props.size === "small" ? "1.2rem" : "1.5rem")};
`;

const StyledRatingLink = styled.a`
  cursor: pointer;
  border-bottom-color: ${(props) => props.theme.colors.colorSecondary};
  border-bottom-width: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorSecondary};
  transition: all 0.2s;

  &:hover {
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.colorSecondary};
  }
`;

const StyledRatingMaximum = styled.span`
  color: ${(props) => props.theme.colors.grey};
`;

export const Rating: React.SFC<RatingProps> = ({ rating, size }) => (
  <StyledRating size={size}>
    <StyledRatingLink>{rating}</StyledRatingLink>
    <StyledRatingMaximum>/10</StyledRatingMaximum>
  </StyledRating>
);
