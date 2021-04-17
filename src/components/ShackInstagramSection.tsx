import React from "react";
import { styled } from "../utils/theme";
import { ShackPageSectionHeadline } from ".";

interface ShackInstagramSectionProps {
  readonly headline?: string;
  readonly backgroundColor?: string;
}

const StyledInstagramSection = styled.div`
  grid-area: instagram;
`;

const StyledInstagramSectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
  border-radius: 0.2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;
`;

export const ShackInstagramSection: React.SFC<ShackInstagramSectionProps> = ({
  headline,
  children,
}) => {
  return (
    <StyledInstagramSection>
      {headline && (
        <ShackPageSectionHeadline>{headline}</ShackPageSectionHeadline>
      )}
      <StyledInstagramSectionContent>{children}</StyledInstagramSectionContent>
    </StyledInstagramSection>
  );
};
