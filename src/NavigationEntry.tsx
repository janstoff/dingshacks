import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Page } from "./utils/config";
import { NavigationPageListItem } from "./components";

interface NavigationEntryProps {
  readonly page: Page;
  readonly onClick?: () => void;
}

export const NavigationEntry: React.FC<NavigationEntryProps> = ({
  page,
  onClick,
}) => {
  const routeMatch = useRouteMatch(page.href);
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <NavigationPageListItem bold={routeMatch?.isExact}>
      <Link
        to={page.href}
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => handleClick()}
      >
        {page.name}
      </Link>
    </NavigationPageListItem>
  );
};
