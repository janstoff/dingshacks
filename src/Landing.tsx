import React from "react";
import {
  LandingHeadline,
  MainLinkButton,
  DownButton,
  LandingLayout,
  LandingWrapper,
} from "./components";
import { useHideDownButton } from "./hooks/use-hide-down-button";

export const Landing: React.FC = () => {
  const [downButtonInitialized, setDownButtonInitialized] = React.useState(
    false
  );

  React.useEffect(() => {
    const downButtonTimeout = setTimeout(() => {
      setDownButtonInitialized(true);
    }, 5000);

    return clearTimeout(downButtonTimeout);
  }, []);

  const hideDownButton = useHideDownButton();

  return (
    <LandingWrapper imageUrl={require("./assets/landing.png")}>
      <LandingLayout>
        <LandingHeadline
          primaryHeadline="dinged board?"
          secondaryHeadline="find the best repair near you"
        />
        <MainLinkButton href="/results">Locate</MainLinkButton>
      </LandingLayout>
      {downButtonInitialized && !hideDownButton && (
        <DownButton anchor="anchor" />
      )}
    </LandingWrapper>
  );
};

export default Landing;
