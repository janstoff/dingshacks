import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Page } from "./utils/config";
import { NavigationPageListItem } from "./components";

interface NavigationEntryProps {
  readonly page: Page;
}

export const NavigationEntry: React.FC<NavigationEntryProps> = ({ page }) => {
  const routeMatch = useRouteMatch(page.href);

  return (
    <NavigationPageListItem bold={routeMatch?.isExact}>
      <Link to={page.href} style={{ textDecoration: "none", color: "inherit" }}>
        {page.name}
      </Link>
    </NavigationPageListItem>
  );
};
