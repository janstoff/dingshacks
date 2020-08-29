import React from "react";
import { styled } from "../utils/theme";
import { FullShack } from "../types";

interface ShackPageProps {
  readonly shackData: FullShack;
}

const StyledShackPage = styled.div``;

export const ShackPage: React.SFC<ShackPageProps> = ({ shackData }) => {
  return <StyledShackPage>{shackData.toString()}</StyledShackPage>;
};
