import { Coordinates } from "../types";

export function getDistanceBetweenCoordinates(
  position1: Coordinates,
  position2: Coordinates,
  inKilometers: boolean
): number {
  if (
    position1.latitude === position2.latitude &&
    position1.longitude === position2.longitude
  ) {
    return 0;
  } else {
    const radlat1 = (Math.PI * position1.latitude) / 180;
    const radlat2 = (Math.PI * position2.latitude) / 180;
    const theta = position1.longitude - position2.longitude;
    const radtheta = (Math.PI * theta) / 180;
    let distance =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (distance > 1) {
      distance = 1;
    }
    distance = Math.acos(distance);
    distance = (distance * 180) / Math.PI;
    distance = distance * 60 * 1.1515; // in miles
    if (inKilometers) {
      distance = distance * 1.609344;
    }
    return Math.round(distance);
  }
}
