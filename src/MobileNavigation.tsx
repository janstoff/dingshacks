import React from "react";
import {
  MobileNavigation as MobileNavigationComponent,
  NavigationIcon,
  NavigationMobileMenuButton,
} from "./components";
import { useRouteMatch } from "react-router-dom";

export const MobileNavigation: React.FC = () => {
  const routeMatch = useRouteMatch("/home");
  return (
    <MobileNavigationComponent>
      <NavigationIcon color="dark" />
      <NavigationMobileMenuButton>
        <img
          src={require(routeMatch?.isExact
            ? "./assets/menu-icon-white.svg"
            : "./assets/menu-icon-dark.svg")}
          alt="Menu"
        />
      </NavigationMobileMenuButton>
    </MobileNavigationComponent>
  );
};
