import React from "react";
import { styled } from "../utils/theme";
import { Rating, ReviewButton } from ".";

interface ShackPageHeaderProps {
  readonly name: string;
  readonly averageRating?: number;
  readonly numberOfReviews?: number;
}

const StyledShackPageHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;
  }
`;

const StyledShackName = styled.div`
  grid-area: name;
  text-align: center;
  font-weight: 600;

  @media only screen and (min-width: 560px) {
    text-align: left;
  }
`;

const StyledRatingWrapper = styled.div`
  grid-area: reviews;
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;

const StyledNumberOfReviews = styled.span`
  font-size: 1.2rem;
`;

export const ShackPageHeader: React.SFC<ShackPageHeaderProps> = ({
  name,
  averageRating,
  numberOfReviews,
}) => (
  <StyledShackPageHeader>
    <StyledShackName>{name}</StyledShackName>
    <StyledRatingWrapper>
      {averageRating && <Rating rating={averageRating} />}
      {numberOfReviews && (
        <StyledNumberOfReviews>
          {numberOfReviews} user {numberOfReviews === 1 ? "review" : "reviews"}
        </StyledNumberOfReviews>
      )}
      <ReviewButton
        onClick={() => console.log("clicked write review button")}
        href="#write-review"
      >
        write review
      </ReviewButton>
    </StyledRatingWrapper>
  </StyledShackPageHeader>
);
