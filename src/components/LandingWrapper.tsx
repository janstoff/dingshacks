import React from "react";
import { styled } from "../utils/theme";

interface LandingWrapperProps {
  readonly imageUrl: string;
}

const StyledLandingWrapper = styled.header<LandingWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95vh;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70vh);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: -1;
`;

export const LandingWrapper: React.SFC<LandingWrapperProps> = React.memo(
  ({ children, imageUrl }) => (
    <StyledLandingWrapper imageUrl={imageUrl}>{children}</StyledLandingWrapper>
  )
);
