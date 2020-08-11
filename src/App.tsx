import React from "react";
import { styled } from "./utils/theme";
import { Header, HomeIcon } from "./components";
import { Landing } from "./Landing";
import { Results } from "./Results";
import { Coordinates, FullShackWithDistance } from "./types";
import { createRankedClosestShacks } from "./utils/create-ranked-closest-shacks";

const StyledApp = styled.div`
  color: ${(props) => props.theme.colors.colorSecondary};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  @media only screen and (max-width: 760px) {
    padding: 0;
  }
`;

function App() {
  const [userLocation, setUserLocation] = React.useState<
    Coordinates | undefined
  >();

  const [results, setResults] = React.useState<
    FullShackWithDistance[] | "loading" | undefined
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
    const mockedShacksData = require("./mocks/shacks.json");
    const newResults = createRankedClosestShacks(
      mockedShacksData,
      userLocation,
      10
    );

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
