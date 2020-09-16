import React from "react";
import { styled } from "../utils/theme";

const StyledPageContent = styled.div`
  width: 80%;
`;

export const PageContent: React.FC = ({ children }) => {
  return <StyledPageContent>{children}</StyledPageContent>;
};
