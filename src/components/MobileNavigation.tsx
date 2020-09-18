import React from "react";
import { styled } from "../utils/theme";

const StyledMobileNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MobileNavigation: React.FC = ({ children }) => (
  <StyledMobileNavigation>{children}</StyledMobileNavigation>
);
