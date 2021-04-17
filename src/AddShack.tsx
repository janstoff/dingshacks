import React from "react";
import {
  PageLayout,
  PageHeadlinesWrapper,
  PageHeadline,
  PageSubHeadline,
  FormElementLabel,
  MainLinkButton,
  ShackPageLayout,
  ShackPageHeaderWrapper,
  ShackNameWrapper,
  ShackNameInput,
  ShackContactSectionWrapper,
  ShackStandardTextInputArea,
  ShackDescriptionWrapper,
  ShackNameAndReviewWrapper,
  ShackInstagramSection,
  ShackStandardInput,
  ShackConstructionsSection,
  ShackReviewsSection,
  ShackConstructionCheckbox,
  ConstructionsWrapper,
  Spacer,
  ShackFormRatingSlider,
  ShackFormRatingSliderWrapper,
} from "./components";
import { ShackCoordinatesSection } from "./components/ShackCoordinatesSection";

interface ShackFormValues {
  readonly name: string;
  readonly description: string;
  readonly street: string;
  readonly postcode: string;
  readonly city: string;
  readonly country: string;
  readonly email: string;
  readonly phone: string;
  readonly instagram: string;
  readonly facebook: string;
  readonly pu: boolean;
  readonly pe: boolean;
  readonly eps: boolean;
  readonly soft: boolean;
  readonly carbon: boolean;
  readonly rating: string;
  readonly review: string;
  readonly latitude: number | undefined;
  readonly longitude: number | undefined;
}

interface FormAction {
  readonly field: string;
  readonly value: string | boolean | number | undefined;
}

const initialState: ShackFormValues = {
  name: "",
  description: "",
  street: "",
  postcode: "",
  city: "",
  country: "",
  email: "",
  phone: "",
  instagram: "",
  facebook: "",
  pu: true,
  pe: false,
  eps: false,
  soft: false,
  carbon: false,
  rating: "",
  review: "",
  latitude: undefined,
  longitude: undefined,
};

function shackFormReducer(
  state: ShackFormValues,
  action: FormAction
): ShackFormValues {
  const { field, value } = action;
  return { ...state, [field]: value };
}

export const AddShack: React.FC = () => {
  const [state, dispatch] = React.useReducer(shackFormReducer, initialState);

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

  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Add New Shack</PageHeadline>
        <PageSubHeadline>
          Register your own shack or a shack you know of here
        </PageSubHeadline>
      </PageHeadlinesWrapper>
      <form onSubmit={(event) => handleSubmit(event)}>
        <ShackPageLayout>
          <ShackPageHeaderWrapper>
            <ShackNameAndReviewWrapper>
              <ShackNameWrapper>
                <ShackNameInput
                  type="text"
                  name="name"
                  required
                  placeholder="shack name"
                  value={state.name}
                  onChange={handleInputChange}
                />
              </ShackNameWrapper>
            </ShackNameAndReviewWrapper>
            <ShackDescriptionWrapper>
              <ShackStandardTextInputArea
                name="description"
                placeholder="add a short description [optional]"
                value={state.description}
                onChange={handleTextAreaChange}
              />
            </ShackDescriptionWrapper>
          </ShackPageHeaderWrapper>
          <ShackContactSectionWrapper headline="Contact">
            <ShackStandardInput
              type="text"
              name="street"
              required
              placeholder="street"
              value={state.street}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="text"
              name="postcode"
              required
              placeholder="post code"
              value={state.postcode}
              onChange={handleInputChange}
            />

            <ShackStandardInput
              type="text"
              name="city"
              required
              placeholder="city"
              value={state.city}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="text"
              name="country"
              required
              placeholder="country"
              value={state.country}
              onChange={handleInputChange}
            />
            <Spacer height="2rem" />
            <ShackStandardInput
              type="email"
              name="email"
              required
              placeholder="email"
              value={state.email}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="tel"
              name="phone"
              required
              placeholder="phone"
              value={state.phone}
              onChange={handleInputChange}
            />
          </ShackContactSectionWrapper>
          <ShackInstagramSection headline="Social">
            <ShackStandardInput
              type="text"
              name="instagram"
              placeholder="link an instagram account [optional]"
              value={state.instagram}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="url"
              name="facebook"
              placeholder="facebook url [optional]"
              value={state.facebook}
              onChange={handleInputChange}
            />
          </ShackInstagramSection>
          <ShackConstructionsSection headline="Constructions">
            <ConstructionsWrapper>
              <ShackConstructionCheckbox
                name="pu"
                checked={state.pu}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="pe"
                checked={state.pe}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="eps"
                checked={state.eps}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="soft"
                checked={state.soft}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="carbon"
                checked={state.carbon}
                onChange={handleInputChange}
              />
            </ConstructionsWrapper>
          </ShackConstructionsSection>
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
          <ShackCoordinatesSection headline="Coordinates">
            <ShackStandardInput
              type="number"
              name="latitude"
              placeholder="latitude"
              value={state.latitude}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="number"
              name="longitude"
              placeholder="longitude"
              value={state.longitude}
              onChange={handleInputChange}
            />
          </ShackCoordinatesSection>
        </ShackPageLayout>
        <MainLinkButton color="secondary" type="submit">
          Save
        </MainLinkButton>
      </form>
    </PageLayout>
  );
};
