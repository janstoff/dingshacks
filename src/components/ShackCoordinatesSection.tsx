import React from "react";
import { styled } from "../utils/theme";

interface ShackCoordinatesSectionProps {
  readonly headline?: string;
}

const StyledCoordinatesSection = styled.div`
  font-size: 1.2rem;
  grid-area: coordinates;
`;

const StyledCoordinatesHeadline = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledCoordinatesContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
  border-radius: 1rem;
  background-color: white;
`;

export const ShackCoordinatesSection: React.SFC<ShackCoordinatesSectionProps> = ({
  headline,
  children,
}) => (
  <StyledCoordinatesSection>
    {headline && (
      <StyledCoordinatesHeadline>{headline}</StyledCoordinatesHeadline>
    )}
    <StyledCoordinatesContent>{children}</StyledCoordinatesContent>
  </StyledCoordinatesSection>
);
