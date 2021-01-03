import {
  Shack,
  LocationCoordinates,
  BaseShackWithDistance,
  BaseShack,
} from "../types";
import { getDistanceBetweenCoordinates } from "./get-distance-between-coordinates";

export function createRankedClosestShacks(
  shacksSearchResults: BaseShack[],
  userLocation: LocationCoordinates
): BaseShackWithDistance[] {
  return shacksSearchResults
    .map((shack: Shack) => {
      return {
        ...shack,
        distance: getDistanceBetweenCoordinates(
          userLocation,
          shack.coordinates,
          true
        ),
      };
    })
    .sort((a, b) => (a.distance > b.distance ? 1 : -1));
}
