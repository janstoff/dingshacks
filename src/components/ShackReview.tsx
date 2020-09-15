import React from "react";
import { styled } from "../utils/theme";
import { Review } from "../types";
import { Rating } from ".";

interface ShackReviewProps {
  readonly review: Review;
}

const StyledReview = styled.div``;

const StyledReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledReviewer = styled.span`
  font-size: 1.2rem;
  font-weight: 550;
  font-style: italic;
`;
const StyledReviewComment = styled.div`
  font-size: 1.2rem;
  text-align: left;
`;

export const ShackReview: React.SFC<ShackReviewProps> = ({ review }) => (
  <StyledReview key={review.id}>
    <StyledReviewHeader>
      <StyledReviewer>{review.user}</StyledReviewer>
      <Rating rating={review.outOfTen} size="small" />
    </StyledReviewHeader>
    <StyledReviewComment>{`"${review.comment}"`}</StyledReviewComment>
  </StyledReview>
);
