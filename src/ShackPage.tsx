import React from "react";
import { useParams } from "react-router-dom";
import {
  ConstructionLabel,
  PageHeadline,
  PageHeadlinesWrapper,
  PageLayout,
  PageSubHeadline,
  ShackConstructionsSection,
  ShackContactSection,
  ShackInstagramSection,
  ShackPageHeader,
  ShackReview,
  ShackReviewsSection,
} from "./components";
import { ShackPageLayout } from "./components/ShackPageLayout";
import { FullShack, ShackResponse } from "./types";

interface ShackPageRouterParams {
  readonly id: string;
  readonly name: string;
}

export const ShackPage: React.FC = () => {
  const { id } = useParams<ShackPageRouterParams>();
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
          shackId={id}
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
          Instagram
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
