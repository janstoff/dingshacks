import React from "react";
import {
  ResultWrapper,
  Result,
  PageLayout,
  PageHeadline,
  PageSubHeadline,
  PageHeadlinesWrapper,
} from "./components";
import {
  BaseShackWithDistance,
  LocationCoordinates,
  SearchResultsResponse,
} from "./types";
import { createRankedClosestShacks } from "./utils/create-ranked-closest-shacks";
import { createReviewsLabel } from "./utils/create-reviews-label";
import { useStore } from "./state-provider/store";

const renderResults = (
  results: BaseShackWithDistance[] | undefined,
  location: LocationCoordinates | null | undefined
) => {
  if (!results || !location) {
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
  const store = useStore();

  React.useEffect(() => {
    if (store && store?.state.location && !store.state.searchResults.length) {
      // Mocked fetch of shacks
      const {
        shacks,
      }: SearchResultsResponse = require("./mocks/backend-reponses/search-results.json");

      const newResults = createRankedClosestShacks(
        shacks,
        store.state.location
      );

      store.dispatch({ type: "SET_SEARCH_RESULTS", payload: newResults });
    }
  }, [store]);

  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Results</PageHeadline>
        <PageSubHeadline>
          Repair Shacks In Order Of Distance To Your Location
        </PageSubHeadline>
      </PageHeadlinesWrapper>
      {renderResults(store?.state.searchResults, store?.state.location)}
    </PageLayout>
  );
});
