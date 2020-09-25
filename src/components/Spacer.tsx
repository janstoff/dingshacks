import React from "react";
import { styled } from "../utils/theme";

interface SpacerProps {
  readonly height: string;
}

const StyledSpacer = styled.div<SpacerProps>`
  margin-top: ${(props) => props.height};
`;

export const Spacer: React.SFC<SpacerProps> = ({ height, children }) => (
  <StyledSpacer height={height}>{children}</StyledSpacer>
);
