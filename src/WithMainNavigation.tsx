import React from "react";
import {
  Navigation,
  LayoutWithNavigation,
  PageContent,
  NavigationIcon,
  NavigationAddShackButton,
} from "./components";
import { Page } from "./utils/config";
import { NavigationPageList } from "./components";
import { NavigationEntry } from "./NavigationEntry";
import { Breakpoints, BreakpointWrapper } from "./components";
import { MobileNavigation } from "./MobileNavigation";

interface NavigationProps {
  readonly pages: Page[];
}

const WithMainNavigation: React.FC<NavigationProps> = ({ pages, children }) => {
  return (
    <LayoutWithNavigation>
      <BreakpointWrapper max={Breakpoints.b960}>
        <MobileNavigation></MobileNavigation>
      </BreakpointWrapper>
      <BreakpointWrapper min={Breakpoints.b960}>
        <Navigation icon={<NavigationIcon color="dark" size="desktop" />}>
          <NavigationPageList>
            {pages.map((page) => (
              <NavigationEntry key={page.href} page={page} />
            ))}
          </NavigationPageList>
          <NavigationAddShackButton href="/addshack">
            Add a shack here
          </NavigationAddShackButton>
        </Navigation>
      </BreakpointWrapper>
      <PageContent>{children}</PageContent>
    </LayoutWithNavigation>
  );
};

export default WithMainNavigation;
