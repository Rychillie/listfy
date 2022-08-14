import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";
import {
  gray,
  indigo,
  red,
  green,
  grayDark,
  indigoDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";
import utils from "./extra/utils";

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...indigo,
      ...red,
      ...green,
    },
    fonts: {
      heading:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      body: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xxl: "(min-width: 1536px)",
  },
  utils: {
    ...utils,
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const dark = createTheme({
  colors: {
    ...grayDark,
    ...indigoDark,
    ...redDark,
    ...greenDark,
  },
});
