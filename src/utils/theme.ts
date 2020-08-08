import baseStyled, { ThemedStyledInterface } from "styled-components";

interface AppStyleTheme {
  readonly colors: {
    readonly colorPrimary: string;
    readonly colorPrimaryLight: string;
    readonly colorSecondary: string;
    readonly colorTertiary: string;
    readonly colorText: string;
    readonly colorTextWhite: string;
    readonly gradientPrimary: string;
    readonly gradientSecondary: string;
    readonly colorFormInputInvalid: string;
    readonly colorFormInputValid: string;
  };
}

export const theme: AppStyleTheme = {
  colors: {
    colorPrimary: "#ff4d4d",
    colorPrimaryLight: "#ff6666",
    colorSecondary: "#40484f",
    colorTertiary: "#66d9ff",
    colorText: "#40494f",
    colorTextWhite: "#ffffff",
    gradientPrimary: "#f5f5f5",
    gradientSecondary: "black",
    colorFormInputInvalid: "#911414",
    colorFormInputValid: "#0ab30a",
  },
};

export const styled = baseStyled as ThemedStyledInterface<AppStyleTheme>;
