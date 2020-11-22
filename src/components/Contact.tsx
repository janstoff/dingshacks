import React from "react";
import { styled } from "../utils/theme";

export interface FormInputProps {
  readonly type:
    | "text"
    | "name"
    | "email"
    | "checkbox"
    | "number"
    | "url"
    | "tel";
  readonly name: string;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly required?: boolean;
  readonly placeholder?: string;
  readonly value?: string | number | undefined;
}

export interface FormTextInputAreaProps {
  readonly name: string;
  readonly onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readonly required?: boolean;
  readonly placeholder?: string;
  readonly value?: string | undefined;
}

export interface FormElementLabelProps {
  readonly htmlFor: string;
}

const StyledContact = styled.div``;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  position: relative;
`;

const StyledFormInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 1.5rem 2rem;
  border: none;
  background-color: whitesmoke;
  border-radius: 2px;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.colorTertiary};

  &:hover,
  &:focus {
    outline: none;

    &:invalid {
      border-bottom: 0.1rem solid
        ${(props) => props.theme.colors.colorFormInputInvalid};
    }

    &:valid {
      border-bottom: 0.1rem solid
        ${(props) => props.theme.colors.colorFormInputValid};
    }
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
  }
`;

const StyledFormTextInputArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  font: inherit;
  padding: 1.5rem 2rem;
  border: none;
  background-color: whitesmoke;
  border-radius: 2px;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.colorTertiary};
  height: 25vh;

  &:hover,
  &:focus {
    outline: none;

    &:invalid {
      border-bottom: 0.1rem solid
        ${(props) => props.theme.colors.colorFormInputInvalid};
    }

    &:valid {
      border-bottom: 0.1rem solid
        ${(props) => props.theme.colors.colorFormInputValid};
    }
  }

  &:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
  }
`;

const StyledFormElementLabel = styled.label`
  display: block;
  text-align: left;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.4rem;
  transition: all 0.3s;
`;

export const Contact: React.FC = ({ children }) => {
  return <StyledContact>{children}</StyledContact>;
};

export const FormGroup: React.FC = ({ children }) => {
  return <StyledFormGroup>{children}</StyledFormGroup>;
};

export const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  required,
  placeholder,
}) => {
  return (
    <StyledFormInput
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
    />
  );
};

export const FormTextInputArea: React.FC<FormTextInputAreaProps> = ({
  name,
  required,
  placeholder,
}) => {
  return (
    <StyledFormTextInputArea
      name={name}
      required={required}
      placeholder={placeholder}
    />
  );
};

export const FormElementLabel: React.FC<FormElementLabelProps> = ({
  htmlFor,
  children,
}) => {
  return (
    <StyledFormElementLabel htmlFor={htmlFor}>
      {children}
    </StyledFormElementLabel>
  );
};
