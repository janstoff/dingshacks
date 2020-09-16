import React from "react";
import {
  ResultWrapper,
  Result,
  ResultsLayout,
  ResultsHeadline,
} from "./components";
import {
  Coordinates,
  BaseShackWithDistance,
  SearchResultsResponse,
} from "./types";
import { createRankedClosestShacks } from "./utils/create-ranked-closest-shacks";
import { createReviewsLabel } from "./utils/create-reviews-label";

const renderResults = (
  results: BaseShackWithDistance[] | "loading" | undefined
) => {
  if (!results || results === "loading") {
    return <div>Loading...</div>;
  }

  return results.map((result) => {
    const reviewsLabel = createReviewsLabel(result);

    return (
      <ResultWrapper key={result.id}>
        <Result result={result} reviewsLabel={reviewsLabel} />
      </ResultWrapper>
    );
  });
};

export const Results: React.FC = () => {
  const [userLocation, setUserLocation] = React.useState<
    Coordinates | undefined
  >();

  const [results, setResults] = React.useState<
    BaseShackWithDistance[] | "loading" | undefined
  >();

  React.useEffect(() => {
    setResults("loading");

    const getUserLocation = async () => {
      await navigator.geolocation.getCurrentPosition((position) =>
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      );
    };

    getUserLocation();

    // TODO: replace with actual fetch, i.e. once user locates, fetch the basic data most relevant shacks

    const {
      shacks,
    }: SearchResultsResponse = require("./mocks/backend-reponses/search-results.json");
    if (!userLocation) {
      setResults(undefined);
      return;
    }

    const newResults = createRankedClosestShacks(shacks, userLocation, 10);

    if (newResults) {
      setResults(newResults);
    }
  }, [userLocation]);

  return (
    <ResultsLayout>
      <ResultsHeadline>Ding Repair Shacks near You</ResultsHeadline>
      {renderResults(results)}
    </ResultsLayout>
  );
};
