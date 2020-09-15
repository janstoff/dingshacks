import React from "react";
import { styled } from "../utils/theme";

interface ShackConstructionsSectionProps {
  readonly headline: string;
  readonly constructions: React.ReactNode;
}

const StyledConstructionsSection = styled.div`
  grid-area: constructions;
`;

const StyledConstructionsHeadline = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
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

export const ShackConstructionsSection: React.SFC<ShackConstructionsSectionProps> = ({
  headline,
  constructions,
}) => (
  <StyledConstructionsSection>
    <StyledConstructionsHeadline>{headline}</StyledConstructionsHeadline>
    <StyledConstructions>{constructions}</StyledConstructions>
  </StyledConstructionsSection>
);
