import React from "react";
import { Header, HomeIcon } from "./components";
import { Landing } from "./Landing";
import { Results } from "./Results";
import {
  Coordinates,
  BaseShackWithDistance,
  SearchResultsResponse,
} from "./types";
import { createRankedClosestShacks } from "./utils/create-ranked-closest-shacks";

function Start() {
  const [userLocation, setUserLocation] = React.useState<
    Coordinates | undefined
  >();

  const [results, setResults] = React.useState<
    BaseShackWithDistance[] | "loading" | undefined
  >();

  const handleLocateClick = async (): Promise<void> => {
    setResults("loading");

    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition((position) =>
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      );
    }
  };

  React.useEffect(() => {
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
    <>
      <Header>
        <HomeIcon />
      </Header>
      <Landing onLocateClick={handleLocateClick} />
      <Results renderSection={!!results} results={results} />
    </>
  );
}

export default Start;
