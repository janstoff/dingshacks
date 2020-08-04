interface AppStyleTheme {
  readonly colors: {
    readonly colorPrimary: string;
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

const theme: AppStyleTheme = {
  colors: {
    colorPrimary: "#ff7260",
    colorSecondary: "#40484f",
    colorTertiary: "#b6ecfd",
    colorText: "#40494f",
    colorTextWhite: "#ffffff",
    gradientPrimary: "#f5f5f5",
    gradientSecondary: "black",
    colorFormInputInvalid: "#911414",
    colorFormInputValid: "#0ab30a",
  },
};

export default theme;
