import React from "react";
import { styled } from "../utils/theme";
import {
  FormInputProps,
  FormTextInputAreaProps,
  FormElementLabelProps,
} from "./Contact";

interface ShackConstructionCheckboxProps {
  readonly name: string;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly checked: boolean | undefined;
  readonly required?: boolean;
}

const StyledShackNameInput = styled.input`
  width: 100%;
  font-size: 1.8rem;
  padding: 1.5rem 2rem;
  border: none;
  background-color: white;
  border-radius: 1rem;
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

const StyledShackStandardInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  border: none;
  background-color: white;
  border-radius: 1rem;
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

const StyledShackStandardTextInputArea = styled.textarea`
  width: 100%;
  font-size: 1.2rem;
  font: inherit;
  padding: 1.5rem 2rem;
  border: none;
  background-color: white;
  border-radius: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.colorTertiary};
  height: 15vh;

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

const StyledConstructionsCheckboxLabel = styled.label<
  Partial<ShackConstructionCheckboxProps>
>`
  position: relative;
  height: 100%;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  text-align: center;
  width: 7rem;
  height: auto;
  color: ${(props) => {
    if (props.checked) {
      if (props.name === "carbon") {
        return "white";
      }
      return "inherit";
    } else {
      return "grey";
    }
  }};
  background-color: ${(props) => {
    if (props.checked) {
      if (props.name === "pu") {
        return props.theme.colors.colorConstructionPu;
      }
      if (props.name === "pe") {
        return props.theme.colors.colorConstructionPe;
      }
      if (props.name === "eps") {
        return props.theme.colors.colorConstructionEps;
      }
      if (props.name === "soft") {
        return props.theme.colors.colorConstructionSoft;
      }
      if (props.name === "carbon") {
        return props.theme.colors.colorConstructionCarbon;
      }
      return props.theme.colors.colorBackgroundPrimary;
    } else {
      return props.theme.colors.colorBackgroundPrimary;
    }
  }};
  border: ${(props) => (props.checked ? "1px solid white" : "1px dotted grey")};
`;

const StyledConstructionsCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const ShackConstructionCheckbox: React.SFC<ShackConstructionCheckboxProps> = ({
  name,
  checked,
  required,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <StyledConstructionsCheckboxLabel
      name={name}
      htmlFor={name}
      checked={checked}
    >
      {name}
      <StyledConstructionsCheckboxInput
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        required={required}
        onChange={(event) => handleChange(event)}
      />
    </StyledConstructionsCheckboxLabel>
  );
};

export const ShackNameInput: React.FC<FormInputProps> = ({
  name,
  type,
  required,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <StyledShackNameInput
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(event) => handleChange(event)}
    />
  );
};

export const ShackStandardInput: React.FC<FormInputProps> = ({
  name,
  type,
  required,
  placeholder,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <StyledShackStandardInput
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={(event) => handleChange(event)}
    />
  );
};

export const ShackStandardTextInputArea: React.FC<FormTextInputAreaProps> = ({
  name,
  required,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event);
  };

  return (
    <StyledShackStandardTextInputArea
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(event) => handleChange(event)}
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
