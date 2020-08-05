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
    <LandingWrapper imageUrl="https://centerforsurfresearch.org/wp-content/uploads/2020/04/How-To-Repair-A-Surfboard_Review.jpg">
      <LandingLayout>
        <LandingHeadline
          primaryHeadline="dinged board?"
          secondaryHeadline="we'll help you find someone to repair it"
        />
        <MainButton>Search</MainButton>
      </LandingLayout>
      {downButtonInitialized && !hideDownButton && (
        <DownButton anchor="anchor" />
      )}
    </LandingWrapper>
  );
};

export default Landing;
