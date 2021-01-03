import React from "react";
import { CoordinatesInput } from "./components/CoordinatesForm";

interface CoordinatesValues {
  readonly latitude: number | undefined;
  readonly longitude: number | undefined;
}

interface FormAction {
  readonly field: string;
  readonly value: number;
}

function coordinatesFormReducer(
  state: CoordinatesValues,
  action: FormAction
): CoordinatesValues {
  const { field, value } = action;
  return { ...state, [field]: value };
}

export const CoordinatesInputForm: React.FC = () => {
  const [coordinates, dispatch] = React.useReducer(coordinatesFormReducer, {
    latitude: undefined,
    longitude: undefined,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const name = target.name;
    const value = target.value;

    event.persist();
    dispatch({ field: name, value: Number(value) });
  };

  return (
    <form onSubmit={() => console.log("submit")}>
      <CoordinatesInput
        type="number"
        name="latitude"
        placeholder="latitude"
        required
        onChange={handleInputChange}
        value={coordinates.latitude}
      />
      <CoordinatesInput
        type="number"
        name="longitude"
        placeholder="longitude"
        required
        onChange={handleInputChange}
        value={coordinates.longitude}
      />
      <button type="submit">submit</button>
    </form>
  );
};
