import { styled } from "@styles/stitches.config";

export const Main = styled("main", {
  display: "flex",
  flex: 1,
  width: "100%",
  maxWidth: "100%",
  flexDirection: "column",
  minHeight: "-webkit-fill-available",
  height: "-webkit-fill-available",
  maxHeight: "-webkit-fill-available",
  padding: "32px 24px",
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
