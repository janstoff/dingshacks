import React from "react";
import { styled } from "../utils/theme";

export interface InputProps {
  readonly type: "number";
  readonly name: string;
  readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly required?: boolean;
  readonly placeholder?: string;
  readonly value?: string | number | undefined;
}

const StyledCoordinatesInput = styled.input`
  width: 70%;
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

export const CoordinatesInput: React.FC<InputProps> = ({
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
    <StyledCoordinatesInput
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

const StyledCoordinatesInputForm = styled.form`
  display: flex;
`;

export const CoordinatesInputForm: React.FC = ({ children }) => {
  return <StyledCoordinatesInputForm>{children}</StyledCoordinatesInputForm>;
};