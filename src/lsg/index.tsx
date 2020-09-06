import React from "react";
import { styled } from "../utils/theme";
import { Results } from "../Results";
import {
  BaseShackWithDistance,
  FullShack,
  SearchResultsResponse,
  Coordinates,
} from "../types";
import { ShackPage } from "../components/ShackPage";
import { createRankedClosestShacks } from "../utils/create-ranked-closest-shacks";

const StyledLSG = styled.div`
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

const dummyUserLocation: Coordinates = {
  latitude: 37.700889,
  longitude: -8.646982,
};

const {
  shacks,
}: SearchResultsResponse = require("../mocks/backend-reponses/search-results.json");
const results: BaseShackWithDistance[] = createRankedClosestShacks(
  shacks,
  dummyUserLocation,
  10
);

const shackData: FullShack = require("../mocks/backend-reponses/shack-1.json");

export const LSG: React.SFC = () => (
  <StyledLSG>
    <Results renderSection={true} results={results} />
    <hr></hr>
    <ShackPage shackData={shackData}></ShackPage>
  </StyledLSG>
);
