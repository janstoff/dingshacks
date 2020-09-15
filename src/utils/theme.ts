import baseStyled, { ThemedStyledInterface } from "styled-components";

interface AppStyleTheme {
  readonly colors: {
    readonly colorPrimary: string;
    readonly colorPrimaryLight: string;
    readonly colorPrimarySuperLight: string;
    readonly colorSecondary: string;
    readonly colorTertiary: string;
    readonly colorText: string;
    readonly colorTextWhite: string;
    readonly colorBackgroundPrimary: string;
    readonly colorBorderLightGrey: string;
    readonly colorBorderSuperLightGrey: string;
    readonly greyLight: string;
    readonly grey: string;
    readonly gradientSecondary: string;
    readonly colorFormInputInvalid: string;
    readonly colorFormInputValid: string;
    readonly colorConstructionPu: string;
    readonly colorConstructionPe: string;
    readonly colorConstructionEps: string;
    readonly colorConstructionSoft: string;
    readonly colorConstructionCarbon: string;
    readonly colorShackPageBackground: string;
  };
}

export const theme: AppStyleTheme = {
  colors: {
    colorPrimary: "#ff4d4d",
    colorPrimaryLight: "#ff6666",
    colorPrimarySuperLight: "#fffcfc",
    colorSecondary: "#66d9ff",
    colorTertiary: "#40484f",
    colorText: "#40494f",
    colorTextWhite: "#ffffff",
    colorBackgroundPrimary: "#ffffff",
    colorBorderLightGrey: "#e6e6e6",
    colorBorderSuperLightGrey: "#fafafa",
    grey: "#e6e6e6",
    greyLight: "#f5f5f5",
    gradientSecondary: "black",
    colorFormInputInvalid: "#911414",
    colorFormInputValid: "#0ab30a",
    colorConstructionPu: "#ff6666",
    colorConstructionPe: "#66d9ff",
    colorConstructionEps: "#e6e6e6",
    colorConstructionSoft: "#96ebc3",
    colorConstructionCarbon: "#40484f",
    colorShackPageBackground: "#f5fcff",
  },
};

export const styled = baseStyled as ThemedStyledInterface<AppStyleTheme>;
