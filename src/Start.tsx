import React from "react";
import {
  NavigationDesktopHomeHeader,
  HomeIcon,
  BreakpointWrapper,
  Breakpoints,
  NavigationAddShackButton,
  NavigationDesktopHomeLinks,
} from "./components";
import { Landing } from "./Landing";
import { MobileNavigation } from "./MobileNavigation";
import { PAGES } from "./utils/config";
import { NavigationEntry } from "./NavigationEntry";

function Start() {
  return (
    <>
      <BreakpointWrapper max={Breakpoints.b960}>
        <MobileNavigation pages={PAGES} />
      </BreakpointWrapper>
      <BreakpointWrapper min={Breakpoints.b960}>
        <NavigationDesktopHomeHeader>
          <HomeIcon />
          <NavigationDesktopHomeLinks>
            {PAGES.map((page) => (
              <NavigationEntry key={page.href} page={page} />
            ))}
            <NavigationAddShackButton href="/addshack" home>
              Register a new shack
            </NavigationAddShackButton>
          </NavigationDesktopHomeLinks>
        </NavigationDesktopHomeHeader>
      </BreakpointWrapper>
      <Landing />
    </>
  );
}

export default Start;
