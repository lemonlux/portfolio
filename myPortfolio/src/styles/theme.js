import { spacing } from "./utils";

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};


const PALETTE_COLOR_DARK = {
  background:  "#282a33",
  color:  "#e1e1e3",
  secondColor: "#d182e8",
  button:  "#fff",
  border:  "#2f2e33",
};

export const themeDark = {
  palette: {
    background: {
      main: PALETTE_COLOR_DARK.background,
      light: PALETTE_COLOR_DARK.background,
      dark: PALETTE_COLOR_DARK.background,
    },
    color: {
      main: PALETTE_COLOR_DARK.color,
      enhance: PALETTE_COLOR_DARK.secondColor
    },
    button: {
      main: PALETTE_COLOR_DARK.button,
    },
    border: {
      main: PALETTE_COLOR_DARK.border,

    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/Subjectivity-Bold.otf",
      thin: "/assets/fonts/Subjectivity-Thin.otf",
      regular: "/assets/fonts/Subjectivity-Regular.otf",
      semibold: "/assets/fonts/Subjectivity-Medium.otf",
      black: "/assets/fonts/Subjectivity-Black.otf",
    },
  },
  spacing,
};
