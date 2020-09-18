import React from "react";
import {
  NavigationMobile,
  NavigationMobileHeader,
  NavigationIcon,
  NavigationMobileMenuButton,
  NavigationMobileMenu,
  NavigationMobileMenuCloseButton,
} from "./components";
import { useRouteMatch } from "react-router-dom";

export const MobileNavigation: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const routeMatch = useRouteMatch("/home");

  return (
    <NavigationMobile>
      <NavigationMobileHeader>
        <NavigationIcon color="dark" />
        {!open && (
          <NavigationMobileMenuButton onClick={() => setOpen(true)}>
            <img
              src={require(routeMatch?.isExact
                ? "./assets/menu-icon-white.svg"
                : "./assets/menu-icon-dark.svg")}
              alt="Menu"
            />
          </NavigationMobileMenuButton>
        )}
      </NavigationMobileHeader>
      {open && (
        <NavigationMobileMenu
          open={open}
          icon={<NavigationIcon color="dark" />}
          closeButton={
            <NavigationMobileMenuCloseButton onClick={() => setOpen(false)}>
              <img src={require("./assets/icon-close.svg")} alt="Menu" />
            </NavigationMobileMenuCloseButton>
          }
        >
          {children}
        </NavigationMobileMenu>
      )}
    </NavigationMobile>
  );
};
