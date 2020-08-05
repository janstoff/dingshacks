import React from "react";
import styled from "styled-components";

interface LandingWrapperProps {
  readonly imageUrl: string;
}

// TODO: pass imageUrl and gradients via props
const StyledLandingWrapper = styled.header<LandingWrapperProps>`
  height: 95vh;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70vh);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
`;

export const LandingWrapper: React.SFC<LandingWrapperProps> = ({
  children,
  imageUrl,
}) => (
  <StyledLandingWrapper imageUrl={imageUrl}>{children}</StyledLandingWrapper>
);
