import React from "react";
import {
  Navigation,
  LayoutWithNavigation,
  HomeIcon,
  Search,
  SearchInNavigationButton,
} from "./components";
import { Page } from "./utils/config";

interface NavigationProps {
  readonly pages: Page[];
}

const handleClick = () => {
  console.log("clicked search from navigation");
};

const WithMainNavigation: React.FC<NavigationProps> = ({ pages, children }) => {
  return (
    <LayoutWithNavigation>
      <Navigation
        icon={<HomeIcon color="dark" />}
        pages={pages}
        search={
          <Search
            headline="new search"
            button={
              <SearchInNavigationButton onClick={handleClick}>
                Locate
              </SearchInNavigationButton>
            }
          />
        }
      />
      {children}
    </LayoutWithNavigation>
  );
};

export default WithMainNavigation;
