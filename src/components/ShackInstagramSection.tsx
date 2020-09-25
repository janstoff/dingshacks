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

const StyledInstagramSectionContent = styled.div<
  Partial<ShackInstagramSectionProps>
>`
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  padding: 1rem;
`;

export const ShackInstagramSection: React.SFC<ShackInstagramSectionProps> = ({
  headline,
  backgroundColor,
  children,
}) => {
  return (
    <StyledInstagramSection>
      {headline && (
        <ShackPageSectionHeadline>{headline}</ShackPageSectionHeadline>
      )}
      <StyledInstagramSectionContent backgroundColor={backgroundColor}>
        {children}
      </StyledInstagramSectionContent>
    </StyledInstagramSection>
  );
};
