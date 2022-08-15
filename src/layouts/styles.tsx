import { styled, css } from "@styles/stitches.config";
import { motion } from "framer-motion";

export const Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  flex: 1,
  p: 16,

  "@lg": {
    flexDirection: "row",
    maxWidth: 1194,
    width: "100%",
    gap: 22,
  },
});

export const Sidebar = styled(motion.aside, {
  flexDirection: "column",
  flex: 1,
  position: "absolute",
  background: "$gray1",
  padding: "32px 24px",
  borderRadius: 12,
  color: "$gray12",
  left: "-150%",
  width: "calc(100% - 32px)",
  height: "calc(100% - 32px)",

  "@lg": {
    left: 0,
    position: "relative",
    maxWidth: "320px",
  },

  variants: {
    isOpen: {
      true: {
        position: "absolute",
        left: 16,

        "@lg": {
          position: "relative",
          height: "100%",
          maxWidth: "320px",
        },
      },
      false: {
        position: "absolute",
        left: "-150%",
      },
    },
  },
});

export const Top = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
});

export const Logo = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontWeight: 700,
  fontSize: 20,
  lineHeight: "150%",
  letterSpacing: "0.2px",
  color: "$gray12",
  padding: "9px 16px",
  gap: 8,
});

export const Main = styled(motion.main, {
  display: "flex",
  flex: 1,
  width: "100%",
  maxWidth: "820px",
  mx: "auto",
  flexDirection: "column",
  padding: "32px 24px 16px",
  gap: 32,
});

export const Content = styled("div", {
  display: "flex",
  flex: 1,
  width: "100%",
  maxWidth: "100%",
  flexDirection: "column",
  height: "100%",
  justifyContent: "flex-end",
  alignItems: "flex-start",
});

export const Navigation = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
});

export const Button = styled("button", {
  appearance: "none",
  background: "$gray1",
  border: "none",
  borderRadius: 24,
  height: 48,
  color: "$gray12",
  fontWeight: 600,
  fontSize: 14,
  padding: "12px 24px",
});
