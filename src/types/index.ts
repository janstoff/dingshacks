export interface Coordinates {
  readonly latitude: number;
  readonly longitude: number;
}

export interface Shack {
  readonly id: string;
  readonly name: string;
  readonly person?: string;
  readonly street: string;
  readonly postcode: string;
  readonly city: string;
  readonly coordinates: Coordinates;
  readonly country?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly web?: string;
  readonly services?: Services;
  readonly verified?: boolean;
}

export interface ShackWithDistance extends Shack {
  readonly distance: number;
}

export interface Review {
  readonly id: string;
  readonly user: string;
  readonly comment: string;
}

export interface Endorsement {
  readonly id: string;
  readonly user: string;
  readonly skills: string[];
  readonly service: string[];
}

export interface Service {
  readonly title: string;
  readonly price: number;
  readonly days: number;
}

export interface Services {
  readonly shaper: boolean | undefined;
  readonly constructions: {
    readonly pu: boolean | undefined;
    readonly epoxy: boolean | undefined;
    readonly soft: boolean | undefined;
    readonly carbon: boolean | undefined;
  };
  readonly currency: string;
  readonly offering: Service[];
}

export interface FullShack extends Shack {
  readonly reviews: Review[];
  readonly endorsements: Endorsement[];
}

export interface FullShackWithDistance extends ShackWithDistance {
  readonly reviews?: Review[];
  readonly endorsements?: Endorsement[];
}

export interface ShacksResponseData {
  readonly shacks: Shack[];
}

export interface ReviewsResponseData {
  readonly reviews: Review[];
}

export interface EndorsementsResponseData {
  readonly reviews: Endorsement[];
}
