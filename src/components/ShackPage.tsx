import React from "react";
import { styled } from "../utils/theme";
import { FullShack } from "../types";

interface ShackPageProps {
  readonly shackData: FullShack;
}

const StyledShackPage = styled.div`
  padding: 0 20% 0 20%;
  display: grid;
  grid-template-areas:
    "header header header"
    "infoColumn contentColumn contentColumn";
`;

const StyledHeader = styled.div`
  grid-area: header;
  display: grid;
  grid-template-areas: "name name reviews";
`;
const StyledName = styled.div`
  grid-area: name;
  display: flex;
`;

const StyledReviews = styled.div`
  grid-area: reviews;
  display: flex;
  justify-content: space-between;
`;
const StyledRating = styled.span``;
const StyledViewReviewsLink = styled.a``;
const StyledReviewButton = styled.button``;

const StyledInfoColumn = styled.div`
  grid-area: infoColumn;
`;
const StyledContactSection = styled.div``;
const StyledConstructionsSection = styled.div``;

const StyledContentColumn = styled.div`
  grid-area: contentColumn;
`;
const StyledInstagramFeed = styled.div``;
const StyledReviewsSection = styled.div``;

// highlight verified status

export const ShackPage: React.SFC<ShackPageProps> = ({ shackData }) => {
  return (
    <StyledShackPage>
      <StyledHeader>
        <StyledName>{shackData.name}</StyledName>
        <StyledReviews>
          <StyledRating>Rating</StyledRating>
          <StyledViewReviewsLink>see Reviews</StyledViewReviewsLink>
          <StyledReviewButton>Review This Shack</StyledReviewButton>
        </StyledReviews>
      </StyledHeader>
      <StyledInfoColumn>
        <StyledContactSection>
          <p>{shackData.street}</p>
          <p>{shackData.city}</p>
          <p>{shackData.postcode}</p>
          <p>{shackData.country}</p>
          <p>{shackData.phone}</p>
          <p>{shackData.email}</p>
        </StyledContactSection>
        <StyledConstructionsSection>Constructions</StyledConstructionsSection>
      </StyledInfoColumn>
      <StyledContentColumn>
        <StyledInstagramFeed>Instagramm</StyledInstagramFeed>
        <StyledReviewsSection>Reviews</StyledReviewsSection>
      </StyledContentColumn>
    </StyledShackPage>
  );
};
