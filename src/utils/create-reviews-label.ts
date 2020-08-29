import { BaseShack } from "../types";

export function createReviewsLabel(shack: BaseShack): string {
  const { numberOfReviews } = shack;
  if (!numberOfReviews || numberOfReviews <= 0) {
    return "no reviews";
  }

  if (numberOfReviews === 1) {
    return `${numberOfReviews} review`;
  }

  return `${numberOfReviews} reviews`;
}
