import React from "react";
import { styled } from "../utils/theme";

const StyledInstagramIconAnchor = styled.a`
  display: inline-block;
  position: absolute;
  top: 4.2rem;
  right: 26rem;
  padding: 1rem;

  @media only screen and (max-width: 760px) {
    top: 2.1rem;
    right: 22rem;
  }
`;

const StyledInstagramLogo = styled.svg`
  height: 2.5rem;

  &:hover {
    fill: $color-primary-light;
  }
`;

export const InstagramIcon: React.SFC = ({ children }) => (
  <StyledInstagramIconAnchor href="https://www.instagram.com/paddelbude/">
    <StyledInstagramLogo />
  </StyledInstagramIconAnchor>
);
