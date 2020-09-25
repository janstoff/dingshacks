import React from "react";
import { styled } from "../utils/theme";
import { ShackPageSectionHeadline } from ".";

interface ShackConstructionsSectionProps {
  readonly headline: string;
  readonly constructions?: React.ReactNode;
}

const StyledConstructionsSection = styled.div`
  grid-area: constructions;
`;

const StyledConstructions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  text-align: left;
  font-size: 1rem;
`;

export const ConstructionsWrapper: React.SFC = ({ children }) => (
  <StyledConstructions>{children}</StyledConstructions>
);

export const ShackConstructionsSection: React.SFC<ShackConstructionsSectionProps> = ({
  headline,
  constructions,
  children,
}) => (
  <StyledConstructionsSection>
    <ShackPageSectionHeadline>{headline}</ShackPageSectionHeadline>
    {constructions && (
      <ConstructionsWrapper>{constructions}</ConstructionsWrapper>
    )}
    {children}
  </StyledConstructionsSection>
);
