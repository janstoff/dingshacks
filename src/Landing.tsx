import React from "react";
import {
  LandingHeadline,
  MainLinkButton,
  DownButton,
  LandingLayout,
  LandingWrapper,
} from "./components";
import { useHideDownButton } from "./hooks/use-hide-down-button";
import { CoordinatesInputForm } from "./CoordinatesInputForm";
import { useStore } from "./state-provider/store";

export const Landing: React.FC = () => {
  const [downButtonInitialized, setDownButtonInitialized] = React.useState(
    false
  );
  const hideDownButton = useHideDownButton();
  const store = useStore();

  React.useEffect(() => {
    const downButtonTimeout = setTimeout(() => {
      setDownButtonInitialized(true);
    }, 5000);

    return clearTimeout(downButtonTimeout);
  }, []);

  React.useEffect(() => {
    if (!store) {
      console.log("No store context available yet.");
    }

    if (!navigator.geolocation) {
      console.warn("No navigator.geolocation available.");
    }

    if (!store?.state.location) {
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
  }, [store]);

  console.log("location:", store?.state.location);

  return (
    <LandingWrapper imageUrl={require("./assets/landing.png")}>
      <LandingLayout>
        <LandingHeadline
          primaryHeadline="dinged board?"
          secondaryHeadline="find the best repair near you"
        />
        {!store?.state.location && <CoordinatesInputForm />}
        {store?.state.location && (
          <MainLinkButton href="/results">
            Search Based on Your Location
          </MainLinkButton>
        )}
      </LandingLayout>
      {downButtonInitialized && !hideDownButton && (
        <DownButton anchor="anchor" />
      )}
    </LandingWrapper>
  );
};

export default Landing;
