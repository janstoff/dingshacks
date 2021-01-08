import React from "react";

import { CoordinatesInputForm } from "./CoordinatesInputForm";

import { MainLinkButton } from "./components";
import { useStore } from "./state-provider/store";

export const LocationSelection: React.FC = () => {
  const store = useStore();

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

  const logUnMount = () => console.log("### unmounting LocationSelection");
  React.useEffect(() => logUnMount);

  return (
    <>
      {!store?.state.location && <CoordinatesInputForm />}
      {store?.state.location && (
        <MainLinkButton href="/results">
          Search Based on Your Location
        </MainLinkButton>
      )}
    </>
  );
};
