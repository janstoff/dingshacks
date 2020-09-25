import React from "react";
import {
  Contact as ContactComponent,
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
import { CONTACT_EMAIL_ADDRESS } from "./utils/config";

export const Contact: React.FC = () => {
  return (
    <PageLayout>
      <PageHeadlinesWrapper>
        <PageHeadline>Contact</PageHeadline>
        <PageSubHeadline>Get in touch with us</PageSubHeadline>
      </PageHeadlinesWrapper>
      <ContactComponent>
        <form
          action={`https://formspree.io/${CONTACT_EMAIL_ADDRESS}`}
          method="POST"
        >
          <FormGroup>
            <FormInput type="name" name="name" required placeholder="name" />
            <FormElementLabel htmlFor="name">name</FormElementLabel>
          </FormGroup>
          <FormGroup>
            <FormInput type="email" name="email" required placeholder="email" />
            <FormElementLabel htmlFor="email">email</FormElementLabel>
          </FormGroup>

          <FormGroup>
            <FormTextInputArea
              name="message"
              required
              placeholder="Your message"
            />
            <FormElementLabel htmlFor="message">your message</FormElementLabel>
          </FormGroup>
          <FormGroup>
            <MainLinkButton color="secondary" type="submit">
              Send
            </MainLinkButton>
          </FormGroup>
        </form>
      </ContactComponent>
    </PageLayout>
  );
};
