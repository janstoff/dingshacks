import React from "react";
import {
  LandingHeadline,
  LandingLayout,
  LandingWrapper,
  MainLinkButton,
} from "./components";

export const Landing: React.FC = () => {
  return (
    <LandingWrapper imageUrl={require("./assets/landing.png")}>
      <LandingLayout>
        <LandingHeadline
          primaryHeadline="dinged board?"
          secondaryHeadline="find the best repair near you"
        />
        <MainLinkButton href="/results">Search</MainLinkButton>
      </LandingLayout>
    </LandingWrapper>
  );
};

export default Landing;
