import React from "react";
import {
  LandingHeadline,
  MainLinkButton,
  LandingLayout,
  LandingWrapper,
} from "./components";
import { CoordinatesSelection } from "./CoordinatesSelection";
import { useStore } from "./state-provider/store";

export const Landing: React.FC = () => {
  const store = useStore();

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

  console.log("location:", store?.state.location);

  return (
    <LandingWrapper imageUrl={require("./assets/landing.png")}>
      <LandingLayout>
        <LandingHeadline
          primaryHeadline="dinged board?"
          secondaryHeadline="find the best repair near you"
        />
        <>
          <MainLinkButton
            href="/results"
            onClick={handleUseBrowserLocationClick}
          >
            Search Based on Your Location
          </MainLinkButton>
          <p style={{ color: "white" }}>or based on coordinates</p>
          <CoordinatesSelection />
        </>
      </LandingLayout>
    </LandingWrapper>
  );
};

export default Landing;
