import {
  Shack,
  ShacksResponseData,
  Coordinates,
  ShackWithDistance,
} from "../types";
import { getDistanceBetweenCoordinates } from "./get-distance-between-coordinates";

export function createRankedClosestShacks(
  rawShacksData: ShacksResponseData,
  userLocation: Coordinates | undefined,
  maxNumberOfResults: number
): ShackWithDistance[] | undefined {
  if (!userLocation) {
    return undefined;
  }

  return rawShacksData.shacks
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
