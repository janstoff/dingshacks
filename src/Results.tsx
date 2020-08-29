import React from "react";
import { Section, SectionHeadline, SectionSubHeadline } from "./components";
import { BaseShackWithDistance } from "./types";
import { Result, ResultWrapper } from "./components";
import { createReviewsLabel } from "./utils/create-reviews-label";
import { getConstructions } from "./utils/get-constructions";

export type Results = BaseShackWithDistance[] | "loading" | undefined;

export interface ResultsProps {
  readonly renderSection: boolean;
  readonly results: Results;
}

const renderResults = (results: Results) => {
  if (!results) {
    return null;
  }

  if (results === "loading") {
    return <div>Loading...</div>;
  }

  return results.map((result) => {
    const reviewsLabel = createReviewsLabel(result);
    const constructions = getConstructions(result);

    return (
      <ResultWrapper key={result.id}>
        <Result
          result={result}
          reviewsLabel={reviewsLabel}
          constructions={constructions}
        />
      </ResultWrapper>
    );
  });
};

export const Results: React.SFC<ResultsProps> = ({ renderSection, results }) =>
  !renderSection ? null : (
    <Section id="results">
      <SectionHeadline>Ding Repair Shacks near You</SectionHeadline>
      <SectionSubHeadline>
        in order of distance to your location
      </SectionSubHeadline>
      {renderResults(results)}
    </Section>
  );
