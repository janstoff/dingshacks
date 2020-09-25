import React from "react";
import { styled } from "../utils/theme";
import { Rating, ReviewButton } from ".";

interface ShackPageHeaderProps {
  readonly name: string;
  readonly averageRating?: number;
  readonly numberOfReviews?: number;
}

const StyledShackPageHeaderWrapper = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledShackNameAndReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
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

const StyledShackDescription = styled.div`
  font-size: 1.2rem;
  grid-area: description;
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 560px) {
    text-align: left;
  }
`;

const StyledRatingWrapper = styled.div`
  grid-area: reviews;
  display: flex;
  align-self: center;
  align-items: center;
  column-gap: 3rem;

  @media only screen and (min-width: 560px) {
    align-self: flex-start;
  }
`;

const StyledNumberOfReviews = styled.span`
  font-size: 1.2rem;
`;

export const ShackPageHeaderWrapper: React.FC = ({ children }) => (
  <StyledShackPageHeaderWrapper>{children}</StyledShackPageHeaderWrapper>
);

export const ShackNameAndReviewWrapper: React.FC = ({ children }) => (
  <StyledShackNameAndReviewWrapper>{children}</StyledShackNameAndReviewWrapper>
);

export const ShackNameWrapper: React.FC = ({ children }) => (
  <StyledShackName>{children}</StyledShackName>
);

export const ShackDescriptionWrapper: React.FC = ({ children }) => (
  <StyledShackDescription>{children}</StyledShackDescription>
);

export const ShackPageHeader: React.SFC<ShackPageHeaderProps> = ({
  name,
  averageRating,
  numberOfReviews,
}) => (
  <ShackPageHeaderWrapper>
    <ShackNameAndReviewWrapper>
      <ShackNameWrapper>{name}</ShackNameWrapper>
      <StyledRatingWrapper>
        {averageRating && <Rating rating={averageRating} />}
        {numberOfReviews && (
          <StyledNumberOfReviews>
            {numberOfReviews} user{" "}
            {numberOfReviews === 1 ? "review" : "reviews"}
          </StyledNumberOfReviews>
        )}
        <ReviewButton
          onClick={() => console.log("clicked write review button")}
          href="#write-review"
        >
          write review
        </ReviewButton>
      </StyledRatingWrapper>
    </ShackNameAndReviewWrapper>
    <ShackDescriptionWrapper>Description</ShackDescriptionWrapper>
  </ShackPageHeaderWrapper>
);
