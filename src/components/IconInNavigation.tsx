import React from "react";
import { styled } from "../utils/theme";

interface IconInNavigationProps {
  readonly color?: "light" | "dark";
}

const StyledIcon = styled.div`
  background-color: transparent;
  height: auto;
  width: 100%;
`;

const StyledImage = styled.img`
  height: 14rem;
`;

export const IconInNavigation: React.SFC<IconInNavigationProps> = ({
  color,
}) => (
  <StyledIcon>
    <StyledImage
      alt="logo"
      src={require(color === "dark"
        ? "../assets/logo-dark-transparent.png"
        : "../assets/logo-white-transparent.png")}
    />
  </StyledIcon>
);
