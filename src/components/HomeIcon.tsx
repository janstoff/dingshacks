import React from "react";
import { styled } from "../utils/theme";

interface HomeIconProps {
  readonly color?: "light" | "dark";
}

const StyledHomeIcon = styled.div`
  background-color: transparent;
  height: auto;
  width: 100%;
`;

const StyledImageWrapper = styled.div`
  display: inline-block;
  text-decoration: none; /* no underline */
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;

  @media only screen and (max-width: 760px) {
    top: 1rem;
    left: 1.5rem;
  }
`;

const StyledImage = styled.img`
  height: 14rem;

  @media only screen and (max-width: 760px) {
    height: 10rem;
  }
`;

export const HomeIcon: React.SFC<HomeIconProps> = ({ color }) => (
  <StyledHomeIcon>
    <StyledImageWrapper>
      <StyledImage
        alt="logo"
        src={require(color === "dark"
          ? "../assets/logo-dark-transparent.png"
          : "../assets/logo-white-transparent.png")}
      />
    </StyledImageWrapper>
  </StyledHomeIcon>
);
