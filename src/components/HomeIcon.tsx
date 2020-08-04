import React from "react";
import styled from "styled-components";

interface HomeIconProps {
  readonly image?: HTMLImageElement;
}

const StyledHomeIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  height: auto;
  width: 100%;
  z-index: 1;
`;

const StyledImageWrapper = styled.div`
  display: inline-block;
  text-decoration: none; /* no underline */
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  transition: all 1s;
`;

export const HomeIcon: React.SFC<HomeIconProps> = ({ image }) => (
  <StyledHomeIcon>
    {image && <StyledImageWrapper>{image}</StyledImageWrapper>}
  </StyledHomeIcon>
);
