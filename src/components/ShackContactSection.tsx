import React from "react";
import { styled } from "../utils/theme";
import { ShackPageSectionHeadline } from ".";

interface ShackContactSectionSectionProps {
  readonly headline?: string;
  readonly backgroundColor?: string;
}

const StyledShackContactSection = styled.div`
  grid-area: contact;
`;

const StyledContactSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  text-align: left;
  font-size: 1.2rem;
`;

export const ShackContactSectionWrapper: React.SFC<ShackContactSectionSectionProps> = ({
  headline,
  children,
}) => (
  <StyledShackContactSection>
    {headline && (
      <ShackPageSectionHeadline>{headline}</ShackPageSectionHeadline>
    )}
    <StyledContactSectionContent>{children}</StyledContactSectionContent>
  </StyledShackContactSection>
);

export const ShackContactSection: React.SFC<ShackContactSectionSectionProps> = ({
  headline,
  children,
}) => (
  <ShackContactSectionWrapper headline={headline} backgroundColor="white">
    {children}
  </ShackContactSectionWrapper>
);
