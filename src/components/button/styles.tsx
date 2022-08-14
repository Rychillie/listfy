import { styled } from "@styles/stitches.config";

export const MenuButton = styled("button", {
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 3,
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: "$gray1",
  border: "none",
  position: "relative",

  span: {
    backgroundColor: "$gray12",
    width: 18,
    height: 2,
    borderRadius: 2,
  },

  variants: {
    status: {
      open: {
        span: {
          position: "absolute",
          "&:first-child": {
            transform: "rotate(45deg)",
          },
          "&:nth-child(2)": {
            opacity: 0,
          },
          "&:last-child": {
            transform: "rotate(-45deg)",
          },
        },
      },
      closed: {
        span: {
          "&:first-child": {},
          "&:nth-child(2)": {},
          "&:last-child": {},
        },
      },
    },
  },
});
