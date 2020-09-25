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
} from "./components";
import { useShackForm } from "./hooks/useShackForm";

export const AddShack: React.FC = () => {
  const { values, handleInputChange, handleTextAreaChange } = useShackForm(
    {
      name: "test",
      description: "test test",
      street: undefined,
      postcode: undefined,
      city: undefined,
      country: undefined,
      email: undefined,
      phone: undefined,
      instagram: undefined,
      facebook: undefined,
      pu: true,
      pe: undefined,
      eps: undefined,
      soft: undefined,
      carbon: undefined,
      rating: undefined,
      review: undefined,
    },
    (values) => console.log(values)
  );

  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Add New Shack</PageHeadline>
        <PageSubHeadline>
          Register your own shack or a shack you know of here, Thanks!
        </PageSubHeadline>
      </PageHeadlinesWrapper>
      <form>
        <ShackPageLayout>
          <ShackPageHeaderWrapper>
            <ShackNameAndReviewWrapper>
              <ShackNameWrapper>
                <ShackNameInput
                  type="text"
                  name="name"
                  required
                  placeholder="shack name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </ShackNameWrapper>
            </ShackNameAndReviewWrapper>
            <ShackDescriptionWrapper>
              <ShackStandardTextInputArea
                name="description"
                placeholder="add a short description [optional]"
                value={values.description}
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
              value={values.street}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="text"
              name="postcode"
              required
              placeholder="post code"
              value={values.postcode}
              onChange={handleInputChange}
            />

            <ShackStandardInput
              type="text"
              name="city"
              required
              placeholder="city"
              value={values.city}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="text"
              name="country"
              required
              placeholder="country"
              value={values.country}
              onChange={handleInputChange}
            />
            <Spacer height="2rem" />
            <ShackStandardInput
              type="email"
              name="email"
              required
              placeholder="email"
              value={values.email}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="tel"
              name="phone"
              required
              placeholder="phone"
              value={values.phone}
              onChange={handleInputChange}
            />
          </ShackContactSectionWrapper>
          <ShackInstagramSection headline="Social">
            <ShackStandardInput
              type="text"
              name="instagram"
              placeholder="link an instagram account [optional]"
              value={values.instagram}
              onChange={handleInputChange}
            />
            <ShackStandardInput
              type="url"
              name="facebook"
              placeholder="facebook url [optional]"
              value={values.facebook}
              onChange={handleInputChange}
            />
          </ShackInstagramSection>
          <ShackConstructionsSection headline="Constructions">
            <ConstructionsWrapper>
              <ShackConstructionCheckbox
                name="pu"
                checked={values.pu}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="pe"
                checked={values.pe}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="eps"
                checked={values.eps}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="soft"
                checked={values.soft}
                onChange={handleInputChange}
              />
              <ShackConstructionCheckbox
                name="carbon"
                checked={values.carbon}
                onChange={handleInputChange}
              />
            </ConstructionsWrapper>
          </ShackConstructionsSection>
          <ShackReviewsSection headline="Review">
            <FormElementLabel htmlFor="rating">Overall rating</FormElementLabel>
            <input
              type="range"
              name="rating"
              min="1"
              max="10"
              value={values.rating}
              onChange={handleInputChange}
            />
            <ShackStandardTextInputArea
              name="review"
              placeholder="add your review comments here"
              value={values.review}
              onChange={handleTextAreaChange}
            />
          </ShackReviewsSection>
        </ShackPageLayout>
      </form>
      <MainLinkButton color="secondary" type="submit">
        Save
      </MainLinkButton>
    </PageLayout>
  );
};
