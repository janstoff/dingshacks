import React from "react";
import {
  ResultWrapper,
  Result,
  PageLayout,
  PageHeadline,
  PageSubHeadline,
  PageHeadlinesWrapper,
} from "./components";
import { BaseShackWithDistance, SearchResultsResponse } from "./types";
import { createRankedClosestShacks } from "./utils/create-ranked-closest-shacks";
import { createReviewsLabel } from "./utils/create-reviews-label";
import { CoordinatesInputForm } from "./CoordinatesInputForm";

const renderResults = (
  results: BaseShackWithDistance[] | undefined,
  fetchingLocation: boolean
) => {
  if (fetchingLocation) {
    return <div style={{ textAlign: "left" }}>Loading...</div>;
  }

  return results?.map((result) => {
    const reviewsLabel = createReviewsLabel(result);

    return (
      <ResultWrapper key={result.id}>
        <Result result={result} reviewsLabel={reviewsLabel} />
      </ResultWrapper>
    );
  });
};

export const Results: React.FC = React.memo(() => {
  const [location, setLocation] = React.useState();
  const [fetchingLocation, setFetchingLocation] = React.useState(true);
  const [results, setResults] = React.useState();

  React.useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("No navigator.geolocation available.");
    }

    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("position: ", position);

          setFetchingLocation(false);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },

        (error) => {
          setFetchingLocation(false);
          console.log("Error getting device location", error);
        }
      );
    }
  }, [location]);

  React.useEffect(() => {
    if (location) {
      // Mocked fetch of shacks
      const {
        shacks,
      }: SearchResultsResponse = require("./mocks/backend-reponses/search-results.json");

      const newResults = createRankedClosestShacks(shacks, location);

      setResults(newResults);
    }
  }, [location]);

  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Results</PageHeadline>
        <PageSubHeadline>
          Repair Shacks In Order Of Distance To Your Location
        </PageSubHeadline>
      </PageHeadlinesWrapper>
      {!location && !fetchingLocation && <CoordinatesInputForm />}
      {renderResults(results, fetchingLocation)}
    </PageLayout>
  );
});
