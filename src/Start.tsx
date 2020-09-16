import React from "react";
import { Header, HomeIcon } from "./components";
import { Landing } from "./Landing";

function Start() {
  return (
    <>
      <Header>
        <HomeIcon />
      </Header>
      <Landing />
    </>
  );
}

export default Start;
