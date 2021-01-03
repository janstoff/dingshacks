import React, { Dispatch } from "react";
import { LocationCoordinates, BaseShackWithDistance } from "../types";

interface StoreState {
  readonly location: LocationCoordinates | null;
  readonly searchResults: BaseShackWithDistance[];
}

export type StoreAction = SetLocationAction | SetSearchResultsAction;

interface SetLocationAction {
  type: "SET_LOCATION";
  payload: LocationCoordinates;
}

interface SetSearchResultsAction {
  type: "SET_SEARCH_RESULTS";
  payload: BaseShackWithDistance[];
}

export interface StoreProviderContext {
  readonly state: StoreState;
  readonly dispatch: Dispatch<StoreAction>;
}

const defaultState = {
  location: null,
  searchResults: [],
};

function reducer(state: StoreState, action: StoreAction) {
  console.log("store action", action);

  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
}

const StoreContext = React.createContext<StoreProviderContext | undefined>(
  undefined
);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
