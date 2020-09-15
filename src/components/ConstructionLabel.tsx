import React from "react";
import { styled } from "../utils/theme";

interface ConstructionLabelProps {
  readonly construction: string;
}

const StyledConstructionLabel = styled.p<ConstructionLabelProps>`
  display: inline-block;
  padding: 0.3rem;
  margin-right: 0.3rem;
  border-radius: 0.3rem;
  width: 5rem;
  color: ${(props) => {
    if (props.construction === "carbon") {
      return "white";
    }
    return "inherit";
  }};
  background-color: ${(props) => {
    if (props.construction === "pu") {
      return props.theme.colors.colorConstructionPu;
    }
    if (props.construction === "pe") {
      return props.theme.colors.colorConstructionPe;
    }
    if (props.construction === "eps") {
      return props.theme.colors.colorConstructionEps;
    }
    if (props.construction === "soft") {
      return props.theme.colors.colorConstructionSoft;
    }
    if (props.construction === "carbon") {
      return props.theme.colors.colorConstructionCarbon;
    }
    return props.theme.colors.colorBackgroundPrimary;
  }};

  &:last-child {
    margin-right: 0;
  }
`;

export const ConstructionLabel: React.SFC<ConstructionLabelProps> = ({
  construction,
}) => (
  <StyledConstructionLabel construction={construction}>
    {construction}
  </StyledConstructionLabel>
);
