import React from "react";
import {
  LandingHeadline,
  MainButton,
  DownButton,
  LandingLayout,
  LandingWrapper,
} from "./components";
import { useHideDownButton } from "./hooks/use-hide-down-button";

export const Landing: React.SFC = () => {
  const [downButtonInitialized, setDownButtonInitialized] = React.useState(
    false
  );

  React.useEffect(() => {
    setTimeout(() => {
      setDownButtonInitialized(true);
    }, 5000);
  }, []);

  const hideDownButton = useHideDownButton();

  return (
    <LandingWrapper imageUrl={require("./assets/landing.png")}>
      <LandingLayout>
        <LandingHeadline
          primaryHeadline="dinged board?"
          secondaryHeadline="find the best repair near you"
        />
        <MainButton>Locate</MainButton>
      </LandingLayout>
      {downButtonInitialized && !hideDownButton && (
        <DownButton anchor="anchor" />
      )}
    </LandingWrapper>
  );
};

export default Landing;
