import { Shack, Coordinates, BaseShackWithDistance, BaseShack } from "../types";
import { getDistanceBetweenCoordinates } from "./get-distance-between-coordinates";

export function createRankedClosestShacks(
  shacksSearchResults: BaseShack[],
  userLocation: Coordinates,
  maxNumberOfResults: number
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
    .sort((a, b) => (a.distance > b.distance ? 1 : -1))
    .slice(0, maxNumberOfResults);
}
