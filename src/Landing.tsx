import React from "react";
import {
  LandingHeadline,
  MainLinkButton,
  LandingLayout,
  LandingWrapper,
  Spacer,
  PlainLinkButton,
} from "./components";
import { LandingCoordinatesSelectionWrapper } from "./components/LandingLayout";
import { CoordinatesSelection } from "./CoordinatesSelection";
import { useStore } from "./state-provider/store";

export const Landing: React.FC = () => {
  const store = useStore();
  const [useCoordinates, openUseCoordinates] = React.useState(false);

  const handleUseBrowserLocationClick = () => {
    if (!store) {
      console.log("No store context available yet.");
    }

    if (!navigator.geolocation) {
      console.warn("No navigator.geolocation available.");
    }

    if (navigator.geolocation) {
      store?.dispatch({
        type: "SET_LOCATION",
        payload: null,
      });

      store?.dispatch({
        type: "SET_SEARCH_RESULTS",
        payload: [],
      });

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("position: ", position);

          store?.dispatch({
            type: "SET_LOCATION",
            payload: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
        },

        (error) => {
          console.log("Error getting device location", error);
        }
      );
    }
  };

  const handleUseCoordinatesClick = () => {
    openUseCoordinates(!useCoordinates && true);
  };

  console.log("location:", store?.state.location);

  return (
    <LandingWrapper imageUrl={require("./assets/landing.png")}>
      <LandingLayout>
        <LandingHeadline text="search board repair" />
        <Spacer height="2rem" />
        {!useCoordinates ? (
          <div>
            <MainLinkButton
              href="/results"
              onClick={handleUseBrowserLocationClick}
            >
              use device location
            </MainLinkButton>
            <Spacer height="2rem" />
            <PlainLinkButton color="white" onClick={handleUseCoordinatesClick}>
              or use coordinates
            </PlainLinkButton>
          </div>
        ) : (
          <>
            <LandingCoordinatesSelectionWrapper>
              <CoordinatesSelection />
            </LandingCoordinatesSelectionWrapper>
            <Spacer height="2rem" />
            <PlainLinkButton
              color="white"
              href="/results"
              onClick={handleUseBrowserLocationClick}
            >
              or use browser location
            </PlainLinkButton>
          </>
        )}
      </LandingLayout>
    </LandingWrapper>
  );
};

export default Landing;
