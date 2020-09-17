import React from "react";
import { styled } from "../utils/theme";

const StyledResultWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResultWrapper: React.SFC = ({ children }) => (
  <StyledResultWrapper>{children}</StyledResultWrapper>
);
