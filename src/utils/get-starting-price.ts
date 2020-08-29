import { FullShack } from "../types";

export function getStartingPrice(shack: FullShack): string {
  const startingPrice = shack.services?.find(
    (service) => service.title === "fix ding or hole"
  )?.price;

  if (!startingPrice) {
    return "not available";
  }

  const currency = shack.currency;

  if (!currency) {
    return `${startingPrice}`;
  }

  return `${startingPrice}${shack.currency}`;
}
