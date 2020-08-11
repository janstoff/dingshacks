import React from "react";
import { styled } from "../utils/theme";
import { FullShackWithDistance } from "../types";

interface ResultProps {
  readonly result: FullShackWithDistance;
}

const StyledResult = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.colorSecondary};
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
`;

const StyledTitle = styled.span`
  font-weight: 600;
`;

const StyledDistance = styled.span`
  font-weight: 500;
  font-style: italic;
`;

const StyledQuickInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Result: React.SFC<ResultProps> = ({ result }) => (
  <StyledResult>
    <StyledRow>
      <StyledTitle>{result.name}</StyledTitle>
      <StyledDistance>{`${result.distance} km`}</StyledDistance>
    </StyledRow>
    <StyledRow>
      <StyledQuickInfoGrid>
        <p>{result.person}</p>
        <p>{`${result.services?.constructions?.pu && "PU"}, ${
          result.services?.constructions?.epoxy && "Epoxy"
        }, ${result.services?.constructions?.soft && "Softboards"}`}</p>
        <p>{result.reviews ?? "no reviews yet"}</p>
        <p>{result.verified && "verified"}</p>
      </StyledQuickInfoGrid>
    </StyledRow>
  </StyledResult>
);
