import React from "react";
import { styled } from "../utils/theme";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  height: auto;
  width: 100%;
  z-index: 1;
`;

export const Header: React.SFC = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);
