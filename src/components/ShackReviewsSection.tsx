import React from "react";
import { styled } from "../utils/theme";

interface ShackReviewsSectionProps {
  readonly headline: string;
  readonly reviews: React.ReactNode;
}

const StyledReviewsSection = styled.div`
  grid-area: reviews;
`;

const StyledReviewsHeadline = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledReviews = styled.div`
  grid-area: reviews;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
`;

export const ShackReviewsSection: React.SFC<ShackReviewsSectionProps> = ({
  headline,
  reviews,
}) => (
  <StyledReviewsSection>
    <StyledReviewsHeadline>{headline}</StyledReviewsHeadline>
    <StyledReviews>{reviews}</StyledReviews>
  </StyledReviewsSection>
);
