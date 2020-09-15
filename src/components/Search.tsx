import React from "react";
import { styled } from "../utils/theme";

interface SearchProps {
  readonly headline: string;
  readonly button: JSX.Element;
}

// TODO: pass imageUrl and gradients via props
const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledHeadline = styled.p``;

export const Search: React.SFC<SearchProps> = ({ headline, button }) => (
  <StyledSearch>
    <StyledHeadline>{headline}</StyledHeadline>
    {button}
  </StyledSearch>
);
