import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../utils/theme";
import { BaseShackWithDistance, Construction } from "../types";
import { ConstructionLabel } from ".";

interface ResultProps {
  readonly result: BaseShackWithDistance;
  readonly reviewsLabel: string;
}

interface ResultInfoGridProps {
  readonly result: BaseShackWithDistance;
  readonly reviewsLabel: string;
}

interface StyledResultProps {
  readonly verified?: boolean;
}

const StyledResult = styled.div<StyledResultProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  border: ${({ verified }) => (verified ? "2px" : "1px")} solid
    ${({ verified, theme }) =>
      verified
        ? theme.colors.colorTertiary
        : theme.colors.colorBorderLightGrey};
  cursor: pointer;
  transition: all 0.2s;
  &:active {
    background-color: ${({ verified, theme }) =>
      verified
        ? theme.colors.colorTertiary
        : theme.colors.colorBackgroundPrimary};
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${({ verified, theme }) =>
        verified
          ? theme.colors.colorPrimarySuperLight
          : theme.colors.colorBackgroundPrimary};
      transform: translateY(-0.3rem);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSpacer = styled.hr<{ readonly width: string }>`
  width: ${(props) => props.width ?? "100%"};
  align-self: center;
  height: 0;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.colorBorderSuperLightGrey};
`;

const StyledTitle = styled.span`
  font-weight: 600;
`;

const StyledDistance = styled.span`
  font-weight: 500;
  font-style: italic;
`;

const StyledIconWrappingCircle = styled.div`
  align-items: center;
  background: white;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.colorTertiary};
  display: flex;
  flex-shrink: 0;
  height: 1.95rem;
  justify-content: center;
  opacity: 1;
  position: absolute;
  right: -0.7rem;
  scale: 1;
  top: -0.4rem;
  width: 2rem;

  &:before {
    box-sizing: content-box;
    border-radius: 50%;
    border: 0.4rem solid white;
    content: "";
    height: 2rem;
    position: absolute;
    top: -6px;
    width: 2rem;
  }
`;

const StyledIcon = styled.div`
  color: ${(props) => props.theme.colors.colorTertiary};
`;

const VerifiedIcon: React.SFC = () => (
  <StyledIconWrappingCircle>
    <StyledIcon>v</StyledIcon>
  </StyledIconWrappingCircle>
);

const StyledQuickInfoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledGridElementWrapper = styled.div`
  font-size: 1.2rem;

  &:first-child {
    justify-self: start;
  }

  &:last-child {
    justify-self: end;
  }
`;

const StyledConstructionDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.3rem;
  border-radius: 1rem;
  background-color: white;
  padding: 0.5rem;
  text-align: left;
  font-size: 1rem;

  @media only screen and (min-width: 560px) {
    gap: 1rem;
    padding: 1rem;
  }
`;

const ResultInfoGrid: React.SFC<ResultInfoGridProps> = ({
  result,
  reviewsLabel,
}) => {
  return (
    <StyledQuickInfoGrid>
      <StyledGridElementWrapper>
        <StyledConstructionDetails>
          {result.constructions?.map((construction: Construction) => (
            <ConstructionLabel key={construction} construction={construction} />
          ))}
        </StyledConstructionDetails>
      </StyledGridElementWrapper>
      <StyledGridElementWrapper>
        <div>{reviewsLabel}</div>
      </StyledGridElementWrapper>
    </StyledQuickInfoGrid>
  );
};

export const Result: React.SFC<ResultProps> = ({ result, reviewsLabel }) => {
  return (
    <StyledResult verified={result.verified}>
      <Link
        to={`/${result.id}/${result.name}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <StyledRow>
          <StyledTitle>{result.name}</StyledTitle>
          <StyledDistance>{`${result.distance} km`}</StyledDistance>
        </StyledRow>
        <StyledSpacer width="80%" />
        <StyledRow>
          <ResultInfoGrid result={result} reviewsLabel={reviewsLabel} />
        </StyledRow>
        {result.verified && <VerifiedIcon />}
      </Link>
    </StyledResult>
  );
};
