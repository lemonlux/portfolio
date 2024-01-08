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

const PALETTE_COLOR_LIGHT = {
  background: "#fff",
  color:  "#fff",
  button:  "#fff",
  border:  "#fff",
};

const PALETTE_COLOR_DARK = {
  background:  "#fff",
  color:  "#fff",
  button:  "#fff",
  border:  "#fff",
};

export const themeLight = {
  palette: {
    background: {
      main: PALETTE_COLOR_LIGHT.background,
      light: PALETTE_COLOR_LIGHT.border,
      dark: PALETTE_COLOR_LIGHT.background,
    },
    color: {
      main: PALETTE_COLOR_LIGHT.color,
    },
    button: {
      main: PALETTE_COLOR_LIGHT.button,
    },
    border: {
      main: PALETTE_COLOR_LIGHT.border,

    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/NOMBRE.FONT.ttf",
      italic: "/assets/fonts/NOMBRE.FONT.ttf",
      regular: "/assets/fonts/NOMBRE.FONT.ttf",
      semibold: "/assets/fonts/NOMBRE.FONT.ttf",
    },
  },
  spacing,
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
      bold: "/assets/fonts/NOMBRE.FONT.ttf",
      italic: "/assets/fonts/NOMBRE.FONT.ttf",
      regular: "/assets/fonts/NOMBRE.FONT.ttf",
      semibold: "/assets/fonts/NOMBRE.FONT.ttf",
    },
  },
  spacing,
};
