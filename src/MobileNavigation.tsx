import React from "react";
import {
  NavigationMobileHeader,
  NavigationIcon,
  NavigationMobileMenuButton,
  NavigationMobileMenu,
  NavigationMobileMenuCloseButton,
} from "./components";
import { useRouteMatch } from "react-router-dom";
import { useOnClickOutsideNavigation } from "./hooks/use-on-click-outside-navigation";

export const MobileNavigation: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const matchHomeRoute = useRouteMatch("/");
  const navigationElementNode = React.useRef<HTMLDivElement>(null);

  useOnClickOutsideNavigation(navigationElementNode, () => setOpen(false));

  return (
    <div ref={navigationElementNode}>
      <NavigationMobileHeader>
        <NavigationIcon color={matchHomeRoute?.isExact ? "light" : "dark"} />
        {!open && (
          <NavigationMobileMenuButton onClick={() => setOpen(true)}>
            <img
              src={require(matchHomeRoute?.isExact
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
    </div>
  );
};
