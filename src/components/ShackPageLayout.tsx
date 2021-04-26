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
    "constructions"
    "contact"
    "instagram"
    "coordinates"
    "reviews";

  @media only screen and (min-width: 560px) {
    padding: 1rem;
    grid-template-areas:
      "header header header header"
      "constructions constructions constructions constructions"
      "contact contact instagram instagram"
      "contact contact coordinates coordinates"
      "reviews reviews reviews reviews";
  }
`;

// highlight verified status

export const ShackPageLayout: React.FC = ({ children }) => {
  return <StyledShackPageLayout>{children}</StyledShackPageLayout>;
};

const StyledShackPageSectionHeadline = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ShackPageSectionHeadline: React.FC = ({ children }) => {
  return (
    <StyledShackPageSectionHeadline>{children}</StyledShackPageSectionHeadline>
  );
};
