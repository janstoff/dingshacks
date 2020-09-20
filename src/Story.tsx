import React from "react";
import {
  PageLayout,
  PageHeadlinesWrapper,
  PageHeadline,
  PageSubHeadline,
} from "./components";

export const Story: React.FC = () => {
  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Story</PageHeadline>
        <PageSubHeadline>Why I started this little project...</PageSubHeadline>
      </PageHeadlinesWrapper>
    </PageLayout>
  );
};
