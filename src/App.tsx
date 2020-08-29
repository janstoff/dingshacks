import React from "react";
import { styled } from "./utils/theme";
import { Header, HomeIcon } from "./components";
import { Landing } from "./Landing";
import { Results } from "./Results";
import {
  Coordinates,
  BaseShackWithDistance,
  SearchResultsResponse,
} from "./types";
import { createRankedClosestShacks } from "./utils/create-ranked-closest-shacks";

const StyledApp = styled.div`
  color: ${(props) => props.theme.colors.colorTertiary};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  @media only screen and (max-width: 760px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

function App() {
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
    const newResults = createRankedClosestShacks(shacks, userLocation, 10);

    if (newResults) {
      setResults(newResults);
    }
  }, [userLocation]);

  return (
    <StyledApp>
      <Header>
        <HomeIcon />
      </Header>
      <Landing onLocateClick={handleLocateClick} />
      <Results renderSection={!!results} results={results} />
    </StyledApp>
  );
}

export default App;
