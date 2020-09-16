import React from "react";
import { styled } from "../utils/theme";

const StyledShackPageLayout = styled.div`
  justify-self: end;
  display: grid;
  padding: 0.2rem;
  outline: 0.2rem ${(props) => props.theme.colors.grey};
  background-color: ${(props) => props.theme.colors.colorShackPageBackground};
  gap: 3rem;
  grid-template-areas:
    "header"
    "instagram"
    "reviews"
    "constructions"
    "contact";

  @media only screen and (min-width: 560px) {
    padding: 1rem;
    grid-template-areas:
      "header header header header"
      "instagram instagram instagram instagram"
      "constructions reviews reviews reviews"
      "contact reviews reviews reviews";
  }

  @media only screen and (min-width: 960px) {
    padding: 2rem;
    grid-template-areas:
      "header header header header header"
      "contact instagram instagram instagram instagram"
      "constructions reviews reviews reviews reviews";
  }
`;

// highlight verified status

export const ShackPageLayout: React.SFC = ({ children }) => {
  return <StyledShackPageLayout>{children}</StyledShackPageLayout>;
};
