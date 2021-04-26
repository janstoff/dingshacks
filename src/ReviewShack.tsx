import React from "react";
import { useParams } from "react-router-dom";
import {
  FormElementLabel,
  MainLinkButton,
  PageHeadline,
  PageHeadlinesWrapper,
  PageLayout,
  PageSubHeadline,
  ShackContactSectionWrapper,
  ShackFormRatingSlider,
  ShackFormRatingSliderWrapper,
  ShackNameAndReviewWrapper,
  ShackNameWrapper,
  ShackPageHeaderWrapper,
  ShackReviewPageLayout,
  ShackReviewsSection,
  ShackStandardInput,
  ShackStandardTextInputArea,
} from "./components";
import { useStore } from "./state-provider/store";

interface ShackReviewRouterParams {
  readonly id: string;
}

interface ShackReviewFormValues {
  readonly shackId: string | undefined;
  readonly userName: string;
  readonly userEmail: string;
  readonly rating: string;
  readonly review: string;
}

interface FormAction {
  readonly field: string;
  readonly value: string | boolean | number | undefined;
}

const initialState: ShackReviewFormValues = {
  shackId: undefined,
  userName: "",
  userEmail: "",
  rating: "",
  review: "",
};

function shackFormReducer(
  state: ShackReviewFormValues,
  action: FormAction
): ShackReviewFormValues {
  const { field, value } = action;
  return { ...state, [field]: value };
}

export const ReviewShack: React.FC = () => {
  const [state, dispatch] = React.useReducer(shackFormReducer, initialState);
  const { id: shackId } = useParams<ShackReviewRouterParams>();

  const shackName = useStore()?.state.searchResults.find(
    (result) => result.id === shackId
  )?.name;

  React.useEffect(() => {
    if (!state.shackId) {
      console.log(`Setting shackId to ${shackId}.`);
      dispatch({ field: "shackId", value: shackId });
    }
  }, [shackId, state.shackId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    event.persist();
    dispatch({ field: name, value });
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = event;
    const { name, value } = target;

    event.persist();
    dispatch({ field: name, value });
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    console.log("values:", state);
  };

  if (!shackName) {
    return (
      <PageLayout>
        <PageHeadline>Review</PageHeadline>
        <PageSubHeadline>Rate and review a shack here</PageSubHeadline>
        <p>unable to fine the shack your were looking for</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Review</PageHeadline>
        <PageSubHeadline>Rate and review a shack here</PageSubHeadline>
      </PageHeadlinesWrapper>
      <form onSubmit={(event) => handleSubmit(event)}>
        <ShackReviewPageLayout>
          <ShackPageHeaderWrapper>
            <ShackNameAndReviewWrapper>
              <ShackNameWrapper>{shackName}</ShackNameWrapper>
            </ShackNameAndReviewWrapper>
          </ShackPageHeaderWrapper>
          <ShackContactSectionWrapper headline="Who is reviewing?">
            <ShackStandardInput
              type="text"
              name="userName"
              required
              placeholder="your name"
              value={state.userName}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="email"
              name="userEmail"
              required
              placeholder="your email"
              value={state.userEmail}
              onChange={handleInputChange}
            />
          </ShackContactSectionWrapper>
          <ShackReviewsSection headline="Review">
            <FormElementLabel htmlFor="rating">Overall rating</FormElementLabel>
            <ShackFormRatingSliderWrapper
              slider={
                <ShackFormRatingSlider
                  name="rating"
                  min="0"
                  max="10"
                  value={state.rating}
                  onChange={handleInputChange}
                />
              }
              value={state.rating}
            />
            <ShackStandardTextInputArea
              name="review"
              placeholder="add your review comments here"
              value={state.review}
              onChange={handleTextAreaChange}
            />
          </ShackReviewsSection>
        </ShackReviewPageLayout>
        <MainLinkButton color="secondary" type="submit" href="/results">
          Save
        </MainLinkButton>
      </form>
    </PageLayout>
  );
};
