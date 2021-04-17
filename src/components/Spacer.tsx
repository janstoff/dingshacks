import React from "react";
import { styled } from "../utils/theme";

interface SpacerProps {
  readonly height: string;
  readonly withLine?: boolean;
  readonly lineColor?: string;
}

const StyledSpacer = styled.div<SpacerProps>`
  margin-top: ${(props) => props.height};
  ${(props) => props.withLine && `border-bottom: 1px solid ${props.lineColor}`}
`;

export const Spacer: React.FC<SpacerProps> = ({
  height,
  withLine = false,
  lineColor = "black",
}) => (
  <StyledSpacer height={height} withLine={withLine} lineColor={lineColor} />
);
