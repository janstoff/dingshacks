import React from "react";
import { styled } from "../utils/theme";
import { FullShack } from "../types";

interface ShackContactSectionProps {
  readonly shackData: FullShack;
}

const StyledContactSection = styled.div`
  grid-area: contact;
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  text-align: left;
  font-size: 1.2rem;
`;

export const ShackContactSection: React.SFC<ShackContactSectionProps> = ({
  shackData,
}) => (
  <StyledContactSection>
    <p>{shackData.street}</p>
    <p>{shackData.city}</p>
    <p>{shackData.postcode}</p>
    <p>{shackData.country}</p>
    <p itemProp="telephone">
      <a href={`tel:${shackData.phone}`}>{shackData.phone}</a>
    </p>
    <p itemProp="email">
      <a href={`mailto:${shackData.email}`}>{shackData.email}</a>
    </p>
  </StyledContactSection>
);
