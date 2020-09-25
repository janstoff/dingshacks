import React from "react";
import { useParams } from "react-router-dom";
import { ShackPageLayout } from "./components/ShackPageLayout";
import { FullShack, ShackResponse } from "./types";
import {
  ShackPageHeader,
  ShackContactSection,
  ShackInstagramSection,
  ShackConstructionsSection,
  ConstructionLabel,
  ShackReviewsSection,
  ShackReview,
  PageLayout,
  PageHeadlinesWrapper,
  PageHeadline,
  PageSubHeadline,
} from "./components";

export const ShackPage: React.SFC = () => {
  const { id } = useParams();
  const [shackData, setShackData] = React.useState<FullShack | undefined>();

  React.useEffect(() => {
    // TODO: fetch actual shack data
    const {
      shack,
    }: ShackResponse = require(`./mocks/backend-reponses/shack-${id}.json`);

    setShackData(shack);
  }, [id]);

  if (!shackData) {
    return <div>Loading...</div>;
  }

  const {
    name,
    averageRating,
    numberOfReviews,
    constructions,
    reviews,
  } = shackData;
  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Results</PageHeadline>
        <PageSubHeadline>Details on each shack</PageSubHeadline>
      </PageHeadlinesWrapper>
      <ShackPageLayout>
        <ShackPageHeader
          name={name}
          averageRating={averageRating}
          numberOfReviews={numberOfReviews}
        />
        <ShackContactSection>
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
        </ShackContactSection>
        <ShackInstagramSection backgroundColor="white">
          Instagramm
        </ShackInstagramSection>
        {constructions && (
          <ShackConstructionsSection
            headline="Constructions"
            constructions={constructions.map((construction) => (
              <ConstructionLabel
                key={construction}
                construction={construction}
              />
            ))}
          />
        )}
        {reviews && (
          <ShackReviewsSection
            headline="Reviews"
            reviews={reviews.map((review) => (
              <ShackReview key={review.id} review={review} />
            ))}
          />
        )}
      </ShackPageLayout>
    </PageLayout>
  );
};
