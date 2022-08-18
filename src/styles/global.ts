import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
  },

  "*, *::before, *::after": {
    boxSizing: "border-box",
  },

  "html, body": {
    height: "100%",
    fontFamily: "$body",
  },

  body: {
    lineHeight: 1.5,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    backgroundColor: "$gray4",
    color: "$gray11",
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "input, button, textarea, select": {
    font: "inherit",
  },

  "p, a": {
    fontFamily: "$body",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    overflowWrap: "break-word",
  },

  "h1, h2, h3, h4, h5, h6": {
    lineHeight: "150%",
    overflowWrap: "break-word",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    fontFamily: "$heading",
    color: "$gray12",
  },

  "#root, #__next": {
    display: "flex",
    isolation: "isolate",
    minHeight: "-webkit-fill-available",
    height: "-webkit-fill-available",
    maxHeight: "-webkit-fill-available",
    width: "100%",
  },
});
