import React from "react";
import { styled } from "../utils/theme";

const StyledInstagramSection = styled.div`
  grid-area: instagram;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
`;

export const ShackInstagramSection: React.SFC = ({ children }) => {
  return <StyledInstagramSection>{children}</StyledInstagramSection>;
};
