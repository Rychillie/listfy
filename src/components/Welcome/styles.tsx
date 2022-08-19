import { css, styled } from "@styles/stitches.config";
import { motion } from "framer-motion";
import { Layout } from "@layouts/styles";

const Position = css({
  padding: "32px 48px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Header = styled(
  motion.header,
  {
    top: 0,
  },
  Position
);

export const Footer = styled(
  motion.footer,
  {
    bottom: 0,
    gap: 32,

    a: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "150%",
      letterSpacing: "0.2px",
      textDecoration: "none",
      transition: "all 0.2s ease-in-out",
      color: "$gray11",

      "&:hover": {
        opacity: 0.72,
      },
    },
  },
  Position
);

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

export const Container = styled(
  motion.main,
  {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  Layout
);

export const Top = styled(motion.div, {
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray4",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
});

export const Title = styled(motion.h1, {
  fontWeight: 900,
  fontSize: 44,
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "0.2px",
});

export const Paragraph = styled(motion.p, {
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "0.2px",
});

export const Row = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: 16,

  "@md": {
    gap: 32,
    flexDirection: "row",
  },
});

const BtnLk = css({
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "$gray12",
  padding: "16px 32px",
  borderRadius: 48,
  backgroundColor: "$gray1",
  border: "none",
  position: "relative",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  width: "100%",
  gap: 4,

  "@md": {
    width: "fit-content",
    padding: "12px 32px",
  },

  "&:hover": {
    color: "$gray10",
    backgroundColor: "$gray2",
  },
});

export const Button = styled(motion.button, {}, BtnLk);

export const BtnLink = styled(motion.a, {}, BtnLk);
