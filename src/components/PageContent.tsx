import React from "react";
import { styled } from "../utils/theme";

const StyledPageContent = styled.div`
  padding: 2rem;
`;

export const PageContent: React.FC = ({ children }) => {
  return <StyledPageContent>{children}</StyledPageContent>;
};
