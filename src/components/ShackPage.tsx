import React from "react";
import { styled } from "../utils/theme";
import { FullShack } from "../types";
import { ReviewButton, ConstructionLabel } from ".";

interface ShackPageProps {
  readonly shackData: FullShack;
}

interface RatingProps {
  readonly rating: number;
}

const StyledShackPage = styled.div`
  display: grid;
  padding: 0.2rem;
  outline: 0.2rem ${(props) => props.theme.colors.greyLight};
  background-color: ${(props) => props.theme.colors.colorShackPageBackground};
  gap: 1rem;
  grid-template-areas:
    "header"
    "instagram"
    "constructions"
    "reviews"
    "contact";

  @media only screen and (min-width: 560px) {
    padding: 1rem;
    margin: 0 5% 0 5%;
    grid-template-areas:
      "header"
      "instagram"
      "constructions"
      "reviews"
      "contact";
  }

  @media only screen and (min-width: 960px) {
    padding: 2rem;
    margin: 0 15% 0 15%;
    grid-template-areas:
      "header header header header header"
      "contact instagram instagram instagram instagram"
      "constructions reviews reviews reviews reviews";
  }
`;

const StyledHeader = styled.div`
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

const StyledName = styled.div`
  grid-area: name;
  text-align: center;
  font-weight: 600;

  @media only screen and (min-width: 560px) {
    text-align: left;
  }
`;

const StyledReviews = styled.div`
  grid-area: reviews;
  display: flex;
  align-items: center;
  column-gap: 3rem;
`;

const StyledRating = styled.div`
  font-size: 1.5rem;
`;

const StyledRatingLink = styled.a`
  cursor: pointer;
  border-bottom-color: ${(props) => props.theme.colors.colorPrimary};
  border-bottom-width: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.colorPrimary};
  transition: all 0.2s;

  &:hover {
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.colorPrimary};
  }
`;

const StyledRatingMaximum = styled.span`
  color: ${(props) => props.theme.colors.grey};
`;

const StyledNumberOfReviews = styled.span`
  font-size: 1.2rem;
`;

const StyledContactSection = styled.div`
  grid-area: contact;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  text-align: left;
  font-size: 1rem;
`;
const StyledConstructionsSection = styled.div`
  grid-area: constructions;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  text-align: left;
  font-size: 1rem;
`;

const StyledInstagramFeed = styled.div`
  grid-area: instagram;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
`;
const StyledReviewsSection = styled.div`
  grid-area: reviews;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
`;

// highlight verified status

const Rating: React.SFC<RatingProps> = ({ rating }) => (
  <StyledRating>
    <StyledRatingLink>{rating}</StyledRatingLink>
    <StyledRatingMaximum>/10</StyledRatingMaximum>
  </StyledRating>
);

export const ShackPage: React.SFC<ShackPageProps> = ({ shackData }) => {
  const { name, averageRating, numberOfReviews } = shackData;

  return (
    <StyledShackPage>
      <StyledHeader>
        <StyledName>{name}</StyledName>
        <StyledReviews>
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
        </StyledReviews>
      </StyledHeader>
      <StyledContactSection>
        <p>{shackData.street}</p>
        <p>{shackData.city}</p>
        <p>{shackData.postcode}</p>
        <p>{shackData.country}</p>
        <p itemProp="telephone">
          <a href={`tel:${shackData.phone}`}>{shackData.phone}</a>
        </p>
        <p itemProp="email">
          <a href={`mailto:${shackData.email}`}>{shackData.email}</a>
        </p>
      </StyledContactSection>
      <StyledInstagramFeed>Instagramm</StyledInstagramFeed>
      <StyledConstructionsSection>
        {shackData.constructions?.map((construction) => (
          <ConstructionLabel construction={construction} />
        ))}
      </StyledConstructionsSection>
      <StyledReviewsSection>Reviews</StyledReviewsSection>
    </StyledShackPage>
  );
};
