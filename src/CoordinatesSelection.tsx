import React from "react";
import { MainLinkButton } from "./components";
import {
  CoordinatesInput,
  CoordinatesInputForm,
} from "./components/CoordinatesSelection";
import { useStore } from "./state-provider/store";

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

export const CoordinatesSelection: React.FC = () => {
  const store = useStore();

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

  const handleSubmitCoordinates = () => {
    const { latitude, longitude } = coordinates;

    if (!store) {
      console.log("No store context available yet.");
    }

    store?.dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: [],
    });

    if (latitude && longitude) {
      store?.dispatch({
        type: "SET_LOCATION",
        payload: { latitude, longitude },
      });
    }
  };

  return (
    <CoordinatesInputForm>
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
      <MainLinkButton
        type="submit"
        href="/results"
        onClick={handleSubmitCoordinates}
      >
        Go
      </MainLinkButton>
    </CoordinatesInputForm>
  );
};
