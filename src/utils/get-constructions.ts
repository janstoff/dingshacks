import { BaseShack } from "../types";

export function getConstructions(shack: BaseShack): string[] {
  const { constructions } = shack;

  if (!constructions) {
    return [];
  }

  let constructionsArray: string[] = [];

  for (const [construction, value] of Object.entries(constructions)) {
    if (value === true) constructionsArray.push(construction);
  }

  return constructionsArray;
}
