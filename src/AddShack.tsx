import React from "react";
import {
  PageLayout,
  PageHeadlinesWrapper,
  PageHeadline,
  PageSubHeadline,
  FormGroup,
  FormInput,
  FormElementLabel,
  FormTextInputArea,
  MainLinkButton,
} from "./components";

export const AddShack: React.FC = () => {
  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Add New Shack</PageHeadline>
        <PageSubHeadline>
          Register your own shack or a shack you know of here, Thanks!
        </PageSubHeadline>
      </PageHeadlinesWrapper>
      <form>
        <FormGroup>
          <FormInput
            type="text"
            name="name"
            required
            placeholder="shack name"
          />
        </FormGroup>
        <FormGroup>
          <FormInput type="text" name="street" required placeholder="street" />
          <FormInput
            type="text"
            name="postcode"
            required
            placeholder="post code"
          />

          <FormInput type="text" name="city" required placeholder="city" />
          <FormInput
            type="text"
            name="country"
            required
            placeholder="country"
          />
        </FormGroup>
        <FormGroup>
          <FormTextInputArea
            name="description"
            placeholder="add a short description [optional]"
          />
          <FormElementLabel htmlFor="description">
            add a short description text [optional]
          </FormElementLabel>
        </FormGroup>
        <FormGroup>
          <FormInput
            type="text"
            name="instagram"
            placeholder="instagram account [optional]"
          />
          <FormInput
            type="text"
            name="facebook"
            placeholder="facebook link [optional]"
          />
        </FormGroup>
        <FormGroup>
          <FormInput type="checkbox" name="pu" />
          <FormElementLabel htmlFor="pu">pu</FormElementLabel>
          <FormInput type="checkbox" name="pe" />
          <FormElementLabel htmlFor="pe">pe</FormElementLabel>
          <FormInput type="checkbox" name="eps" />
          <FormElementLabel htmlFor="eps">eps</FormElementLabel>
          <FormInput type="checkbox" name="soft" />
          <FormElementLabel htmlFor="soft">soft</FormElementLabel>
          <FormInput type="checkbox" name="carbon" />
          <FormElementLabel htmlFor="carbon">carbon</FormElementLabel>
        </FormGroup>
        <FormGroup>
          <FormInput type="checkbox" name="pu" />
          <FormElementLabel htmlFor="pu">pu</FormElementLabel>
        </FormGroup>
        <FormGroup>
          <FormInput type="number" name="rating"></FormInput>
          <FormElementLabel htmlFor="rating">Overall rating</FormElementLabel>
          <FormTextInputArea
            name="review"
            required
            placeholder="Your review comments"
          />
          <FormElementLabel htmlFor="review">
            your review comments
          </FormElementLabel>
        </FormGroup>
        <FormGroup>
          <MainLinkButton color="secondary" href="/">
            Save
          </MainLinkButton>
        </FormGroup>
      </form>
    </PageLayout>
  );
};
