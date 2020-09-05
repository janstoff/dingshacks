// Front End Data Structures

export interface Coordinates {
  readonly latitude: number;
  readonly longitude: number;
}

export interface Review {
  readonly user: string;
  readonly comment: string;
  readonly outOfTen: number;
}

export interface BaseShack {
  readonly id: string;
  readonly name: string;
  readonly coordinates: Coordinates;
  readonly constructions?: Constructions;
  readonly verified?: boolean;
  readonly numberOfReviews?: number;
}

export interface BaseShackWithDistance extends BaseShack {
  readonly distance: number;
}

export interface Shack extends BaseShack {
  readonly person?: string;
  readonly street?: string;
  readonly postcode?: string;
  readonly city?: string;
  readonly coordinates: Coordinates;
  readonly country?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly web?: string;
  readonly shaper?: boolean;
  readonly currency?: string;
  readonly services?: Service[];
}

export interface Constructions {
  readonly pu?: boolean;
  readonly pe?: boolean;
  readonly eps?: boolean;
  readonly soft?: boolean;
  readonly carbon?: boolean;
}

export interface Service {
  readonly title: string;
  readonly price: number;
  readonly days?: number;
}

export interface FullShack extends Shack {
  readonly reviews?: Review[];
}

// Backend Responses Data Structures

export interface SearchResultsResponse {
  readonly shacks: BaseShack[];
}

export interface ShackResponse {
  readonly shack: FullShack;
}

// Backend Data Structures

export interface ReviewTableEntry extends Review {
  readonly id: string;
}

export interface ShacksTableData {
  readonly shacks: Shack[];
}

export interface ReviewsTableData {
  readonly reviews?: ReviewTableEntry[];
}
