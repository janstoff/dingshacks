import React from "react";
import {
  Navigation,
  LayoutWithNavigation,
  PageContent,
  NavigationIcon,
  NavigationAddShackButton,
} from "./components";
import { Page } from "./utils/config";
import { NavigationPageList } from "./components/Navigation";
import { NavigationEntry } from "./NavigationEntry";

interface NavigationProps {
  readonly pages: Page[];
}

const WithMainNavigation: React.FC<NavigationProps> = ({ pages, children }) => {
  return (
    <LayoutWithNavigation>
      <Navigation icon={<NavigationIcon color="dark" />}>
        <NavigationPageList>
          {pages.map((page) => (
            <NavigationEntry key={page.href} page={page} />
          ))}
        </NavigationPageList>
        <NavigationAddShackButton href="/addshack">
          Add a shack here
        </NavigationAddShackButton>
      </Navigation>
      <PageContent>{children}</PageContent>
    </LayoutWithNavigation>
  );
};

export default WithMainNavigation;
