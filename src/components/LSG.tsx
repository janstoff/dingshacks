import React from "react";
import { styled } from "../utils/theme";
import { Results } from "../Results";
import { BaseShackWithDistance, FullShack } from "../types";
import { ShackPage } from "./ShackPage";

const StyledLSG = styled.div`
  color: ${(props) => props.theme.colors.colorTertiary};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  @media only screen and (max-width: 760px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const results: BaseShackWithDistance[] = [
  {
    id: "1",
    name: "Surfboard Repairs Ericeira",
    coordinates: {
      latitude: 38.3582965,
      longitude: -9.4581335,
    },
    constructions: {
      pu: true,
      epoxy: true,
      soft: true,
      carbon: true,
    },
    verified: true,
    distance: 10,
  },
  {
    id: "2",
    name: "Semente Surfboards Ericeira",
    coordinates: {
      latitude: 38.3582965,
      longitude: -9.4581335,
    },
    constructions: {
      pu: true,
      epoxy: false,
      soft: true,
    },
    verified: false,
    distance: 12,
  },
];

const shackData: FullShack = {
  id: "1",
  name: "Surfboard Repairs Ericeira",
  person: "Cita",
  street: "Rua da Colonia",
  postcode: "2655",
  city: "Carvoeira",
  country: "Portugal",
  phone: "+35913207988",
  email: "alexrepairsyoursurfboard@gmail.com",
  web: "https://www.facebook.com/dingrepairs/",
  coordinates: {
    latitude: 38.3582965,
    longitude: -9.4581335,
  },
  constructions: {
    pu: true,
    epoxy: true,
    soft: true,
  },
  shaper: false,
  currency: "EUR",
  services: [
    { title: "pick up", price: 0 },
    {
      title: "fix ding or hole",
      price: 30,
      days: 1,
    },
    {
      title: " fix nose",
      price: 65,
      days: 1,
    },
    {
      title: " fix futures fin box",
      price: 75,
      days: 2,
    },
    {
      title: "fix tail",
      price: 90,
      days: 2,
    },
    {
      title: "fix broken in half board",
      price: 150,
      days: 2,
    },
  ],
  verified: true,
  reviews: [
    {
      user: "dingshacks",
      comment:
        "Cita at Surboard Repairs Ericeira did a fantastic on my carbon / epoxy SUP.",
      outOfTen: 10,
    },
  ],
};

export const LSG: React.SFC = () => (
  <StyledLSG>
    <Results renderSection={true} results={results} />
    <hr></hr>
    <ShackPage shackData={shackData}></ShackPage>
  </StyledLSG>
);
