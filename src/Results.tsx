import React from "react";
import { Section, SectionHeadline, SectionSubHeadline } from "./components";
import { ShackWithDistance } from "./types";
import { Result } from "./components/Result";

export type Results = ShackWithDistance[] | "loading" | undefined;

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

  return results.map((result) => <Result key={result.id} result={result} />);
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
