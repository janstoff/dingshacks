import React from "react";
import { styled } from "../utils/theme";
import { Link } from "react-router-dom";

interface IconInNavigationProps {
  readonly color?: "light" | "dark";
  readonly size?: "desktop" | "mobile";
}

const StyledIcon = styled.div`
  background-color: transparent;
  height: auto;
  width: 100%;
`;

const StyledImage = styled.img<Pick<IconInNavigationProps, "size">>`
  height: ${(props) => (props.size === "desktop" ? "14rem" : "8rem")};
`;

export const NavigationIcon: React.SFC<IconInNavigationProps> = ({
  color,
  size,
}) => (
  <Link to="/">
    <StyledIcon>
      <StyledImage
        alt="logo"
        src={require(color === "dark"
          ? "../assets/logo-dark-transparent.png"
          : "../assets/logo-white-transparent.png")}
        size={size}
      />
    </StyledIcon>
  </Link>
);
