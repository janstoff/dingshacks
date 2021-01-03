import React from "react";
import {
  LocationCoordinates,
  BaseShackWithDistance,
  SearchResultsResponse,
} from "../types";
import { createRankedClosestShacks } from "../utils/create-ranked-closest-shacks";

export function useSearchResults() {
  const [userLocation, setUserLocation] = React.useState<
    LocationCoordinates | "error" | undefined
  >();

  const [results, setResults] = React.useState<
    BaseShackWithDistance[] | "loading" | undefined
  >();

  React.useEffect(() => {
    setResults("loading");

    // TODO: find final browser location fetching setup / fix React State memory leak
    navigator.geolocation.getCurrentPosition((position) =>
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );

    // TODO: replace with actual fetch, i.e. once user locates, fetch the basic data most relevant shacks
    const {
      shacks,
    }: SearchResultsResponse = require("../mocks/backend-reponses/search-results.json");
    if (!userLocation) {
      setResults(undefined);
      return;
    }

    if (userLocation === "error") {
      return;
    }

    const newResults = createRankedClosestShacks(shacks, userLocation);

    if (newResults) {
      setResults(newResults);
    }
  }, [userLocation]);

  return { results };
}
