import React from "react";
import {
  Navigation,
  LayoutWithNavigation,
  Search,
  SearchInNavigationButton,
  PageContent,
  IconInNavigation,
} from "./components";
import { Page } from "./utils/config";

interface NavigationProps {
  readonly pages: Page[];
}

const WithMainNavigation: React.FC<NavigationProps> = ({ pages, children }) => {
  return (
    <LayoutWithNavigation>
      <Navigation
        icon={<IconInNavigation color="dark" />}
        pages={pages}
        search={
          <Search
            headline="new search"
            button={
              <SearchInNavigationButton href="/results">
                Locate
              </SearchInNavigationButton>
            }
          />
        }
      />
      <PageContent>{children}</PageContent>
    </LayoutWithNavigation>
  );
};

export default WithMainNavigation;
